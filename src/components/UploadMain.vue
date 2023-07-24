<script setup>
import {computed, onBeforeMount, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";
import {fly} from "@/utils/request";
import SocketService from "@/utils/websocket";
import useClipboard from 'vue-clipboard3'
import * as tus from 'tus-js-client'
import {utils} from "@/utils/func";
import { createToaster } from "@meforma/vue-toaster";
import CountDown from "@/components/CountDown.vue";
const toaster = createToaster({ /* options */ });

const { toClipboard } = useClipboard()
const pageState = ref("noStart");
const state = reactive({
  progressText:"",
  fileName:"",
  fileSize:0,
  progressBar:"",
  fileInfo:{},
  shareUrl : "",
  toggleBtn:"暂停"
})
let upload = null
let uploadIsRunning = false


onBeforeMount(()=>{
  fly.post("api/newConnect",{}).then( res => {
    if(res.code == 200){
      store.dispatch("setUserIdAction",res.data);
      //返回成功，进行websoket连接登录
      SocketService.Instance.connect(res.data,"login");
    }
  }).catch(err => {
    store.dispatch("setErrorMsgAction",err.message)
  })
})
const uploadFileFunc = () => {
  document.getElementById("fileInput").click();
}
const reset = () =>{
  pageState.value = "noStart";
  upload = null
  uploadIsRunning = false
}
const startUploadFileFunc = (event) => {
  const file = event.target.files[0];
  if (!file) {
    return
  }
  if (!tus.isSupported) {
    alert('This browser does not support uploads. Please use a modern browser instead.')
    return
  }
  state.fileName = file.name;
  const endpoint = "http://localhost:10000/files/";
  let chunkSize = Infinity
  let parallelUploads = 1
  const options = {
    endpoint,
    chunkSize,
    retryDelays: [0, 1000, 3000, 5000],
    parallelUploads,
    metadata: {
      'Content-Type': 'application/json',
      filename: file.name,
      filetype: file.type,
    },
    headers:{
      Authorization:store.getters.getUserId
    },
    onError(error) {
      toaster.error(`文件过大，限制上传大小为1GB`);
      reset()
    },
    onProgress(bytesUploaded, bytesTotal) {
      pageState.value = "progress";
      const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
      state.progressBar = `${percentage}%`
      state.progressText = `Uploaded ${utils.bytesToSize(bytesUploaded)} of ${utils.bytesToSize(bytesTotal)} (${percentage}%)`
    },
    onSuccess(event) {
      fly.get("api/complete/"+utils.getLastSegmentFromUrl(upload.url),{}).then( res => {
        if(res.code == 200){
          state.fileInfo = res.data;
          pageState.value = "finished"
          state.shareUrl = res.data.shareUrl
        }
      }).catch(err => {
        reset()
      })
    }
  }
  upload = new tus.Upload(file, options)
  upload.findPreviousUploads().then((previousUploads) => {
    //askToResumeUpload(previousUploads, upload)
    upload.start()
    uploadIsRunning = true
  })
}

const pauseUploadFileFunc = (event) => {
  event.preventDefault();
  if (upload) {
    if (uploadIsRunning) {
      upload.abort()
      state.toggleBtn = '继续'
      uploadIsRunning = false
    } else {
      upload.start()
      state.toggleBtn = '暂停'
      uploadIsRunning = true
    }
  }
}
const copyCode = async () => {
  try {
    await toClipboard(state.shareUrl).then(()=>{
      toaster.success(`复制成功`);
    }).catch(()=>{
      toaster.error(`复制失败`);
    });
  } catch(e){
    //console.log(e);
  }
}

</script>

<template>
<div class="main">
  <div class="main-upload">
    <div class="main-upload-noStart" v-if="pageState == 'error'">error</div>

    <div class="main-upload-noStart" v-if="pageState == 'noStart'">
      <button @click="uploadFileFunc">select a file</button>
      <input style="display: none" type="file" id="fileInput" @change="startUploadFileFunc" />
    </div>
    <div class="main-upload-process"  v-if="pageState == 'progress'">
      <div class="main-upload-process-loading">
        <p class="main-upload-process-loading__tips">Uploading:</p>
        <div class="main-upload-process-loading__row">
          <div class="main-upload-process-loading__row-progress">
            <div class="main-upload-process-loading__row-progress-bar" :style="{width:state.progressBar}"></div>
          </div>
          <button @click="pauseUploadFileFunc" class="main-upload-process-loading__row-pause">{{state.toggleBtn}}</button>
        </div>
        <p class="main-upload-process-loading__text">{{state.progressText}}</p>
      </div>
    </div>
    <div class="main-upload-finished"  v-if="pageState == 'finished'">
      <p class="main-upload-finished-fileName">{{state.fileName}}</p>
      <p class="main-upload-finished-fileInfo">
        <span>Size: </span>
        <span>{{utils.bytesToSize(state.fileInfo.file_size)}}</span>
        <span> · ExpTime: </span>
        <count-down :end-time="state.fileInfo.expired_time"></count-down>
      </p>
      <div class="main-upload-finished-tempLink">
        <div class="main-upload-finished-tempLink-urls">
          <div class="main-upload-finished-tempLink-urls__url">
            <input @click="copyCode" readonly="" type="text" :value="state.shareUrl">
          </div>
          <div class="main-upload-finished-tempLink-urls__tips">
            <span>复制以上链接下载。文件有效期为24小时，请在有效期内下载，否则链接失效</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/style/animation.css";
.main{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 500px);
  min-height: 300px;
  padding: 40px;
  &-upload{
    position: relative;
    height: 100%;
    width: 100%;
    &-noStart{
      width: 100%;
      min-height: 70px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      button {
        appearance: none;
        background-color: #FAFBFC;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        box-sizing: border-box;
        color: #24292E;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        padding: 6px 16px;
        position: relative;
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
        word-wrap: break-word;
        &:hover {
          background-color: #F3F4F6;
          text-decoration: none;
          transition-duration: 0.1s;
        }
        &:disabled {
          background-color: #FAFBFC;
          border-color: rgba(27, 31, 35, 0.15);
          color: #959DA5;
          cursor: default;
        }
        &:active {
          background-color: #EDEFF2;
          box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
          transition: none 0s;
        }
        &:focus {
          outline: 1px transparent;
        }
        &:before {
          display: none;
        }
      }
    }
    &-process{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      &-loading{
        width:100%;
        max-width: 1024px;
        margin: 30px auto 1.5rem auto;
        background-color: #fcfcfc;
        border: 1px solid #ededed;
        border-radius: 1rem;
        padding:1.25rem 1.5rem;
        &__tips{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
          font-weight: 700;
          margin-bottom: .5rem;
          margin-top: 0;
          color: #171717;
        }
        &__row{
          display: flex;
          flex-wrap: nowrap;
          gap: .75rem;
          justify-content: space-between;
          margin-bottom: .5rem;
          &-progress{
            background-color: #f8f8f8;
            border-radius: 4px;
            box-shadow: 0 1px 1px #ededed inset;
            flex: 1;
            height: 2.5rem;
            overflow: hidden;
            &-bar{
              animation: _stripes_1as67_1 2s linear infinite;
              background-color: #48aa92;
              background-image: linear-gradient(-45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);
              background-size: 40px 40px;
              box-shadow: inset 0 1px 1px #0000000d;
              height: 100%;
              line-height: 2.5rem;
              transition: width .25s ease,background-color .25s ease
            }
          }
          &-pause{
            background-color: transparent;
            border: 1px solid #c7c7c7;
            border-radius: .25rem;
            color: #6f6f6f;
            cursor: pointer;
            display: inline-block;
            font-size: .75rem;
            font-weight: 600;
            height: 2.5rem;
            letter-spacing: 1px;
            line-height: 2.5rem;
            padding: 0 2rem;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            white-space: nowrap
          }

        }
        &__text{
          font-size: 14px;
          color: #171717;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
        }

      }
    }
    &-finished{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      &-fileName{
        margin-bottom: 10px;
        font-size: 24px;
      }
      &-fileInfo{
        font-size: 16px;
        margin-top: 10px;
      }
      &-tempLink{
        display: flex;
        width: 100%;
        max-width: 1024px;
        margin: 40px auto;
        &-urls{
          -webkit-box-flex: 1;
          -webkit-flex: auto;
          -ms-flex: auto;
          flex: auto;
          &__url{
            input{
              background: #f9f2e7;
              color: #333;
              border: 0;
              margin: 0;
              font: 18px/1 monospace;
              height: 60px;
              padding: 20px;
              text-align: center;
              width: 100%;
              border-radius: 4px 4px 0 0;
            }
          }
          &__tips{
            background: #eee;
            color: #333;
            height: 40px;
            padding: 10px 20px;
            text-align: center;
            width: 100%;
            font: 14px/1 Quicksand,sans-serif;
            border-radius: 0 0 4px 4px;
          }
        }
      }
    }
  }
}
</style>
