<script setup>
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {fly} from "@/utils/request";
import {utils} from "../utils/func";
import Error from "@/components/Error.vue";
import CountDown from "@/components/CountDown.vue";
const route = useRoute()
const state = reactive({
  info:{},
  url:"",
  expireTime:0
})
const isLoading = ref(false)
const errMessage = ref("")

onBeforeMount(()=>{
  let shareId = route.params.code != undefined ? route.params.code:"";
  fly.get("api/file/"+shareId,{}).then( res => {
    if(res.code == 200){
      state.info = res.data;
      state.url = res.data.url;
      state.expireTime= res.data.expire;
      isLoading.value = true;
    }
  }).catch(err => {
    isLoading.value = false;
    errMessage.value = err.data.message
  })
})
const downloadFunc = () => {
  let eleLink = document.createElement('a');
  eleLink.download = state.info.file_name;
  eleLink.style.display = 'none';
  eleLink.href = state.url;
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
}

</script>

<template>
  <div class="main">
    <div v-if="isLoading" class="main-down">
      <div class="main-down-finished">
        <p class="main-down-finished-fileName">{{state.info.file_name}}</p>
        <p class="main-down-finished-fileInfo">
          <span>Size: </span>
          <span>{{utils.bytesToSize(state.info.file_size)}}</span>
          <span> · Downloads: </span>
          <span>{{state.info.downloads}}</span>
          <span> · Views: </span>
          <span>{{state.info.views}}</span>
          <span> · Expiration time: </span>
          <count-down  :end-time="state.expireTime"></count-down>
        </p>
        <div class="line-t-40"></div>
        <button @click="downloadFunc" class="main-down-finished-download">Download</button>
      </div>
    </div>
    <error v-else :message="errMessage"></error>
  </div>
</template>

<style scoped lang="scss">
.main{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 500px);
  min-height: 300px;
  padding: 40px;
  &-down{
    position: relative;
    height: 100%;
    width: 100%;
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
      &-download{
        display: block;
        padding: 20px;
        background: #4bb74c;
        border: none;
        color: #fff;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border-radius: 4px;
        font: 700 18px/20px Quicksand,sans-serif;
        -webkit-transition: .25s;
        -moz-transition: .25s;
        -o-transition: .25s;
        -ms-transition: .25s;
        transition: .25s;
        cursor: pointer;
        text-transform: uppercase;

      }
    }
  }
}
</style>
