<script setup>

</script>

<template>
<div class="main">
  <div class="main-upload">
    <div class="main-upload-noStart" v-if="false"><button>选择一个文件</button></div>
    <div class="main-upload-process" v-if="false">
      <div class="main-upload-process-loading">
        <div class="main-upload-process-loading__loader">
          <span class="main-upload-process-loading__loader-text">上传中</span>
          <span class="main-upload-process-loading__loader-load"></span>
        </div>

      </div>
      <div class="main-upload-process-tips">上传进度:89%</div>

    </div>
    <div class="main-upload-finished">
      <p class="main-upload-finished-fileName">charles-proxy-4.6.4_amd64.tar.gz</p>
      <p class="main-upload-finished-fileInfo">
        <span>Peers: </span>
        <span>0</span>
        <span> · Up: </span>
        <span>0 Bytes</span>
      </p>
      <div class="main-upload-finished-tempLink">
        <div class="main-upload-finished-tempLink-urls">
          <div class="main-upload-finished-tempLink-urls__url">
            <input readonly="" type="text" value="https://file.pizza/squid/gorgonzola/mushrooms/fungi">
          </div>
          <div class="main-upload-finished-tempLink-urls__tips">
            <span>复制以上链接下载。请勿离开本页面，否则下载链接失效</span>
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
        margin: 30px auto;
        &__loader{
          width: 80px;
          height: 50px;
          position: relative;
          &-text{
            position: absolute;
            top: 0;
            padding: 0;
            margin: 0;
            color: #C8B6FF;
            animation: text_713 3.5s ease both infinite;
            font-size: .8rem;
            letter-spacing: 1px;
          }
          &-load {
            background-color: #9A79FF;
            border-radius: 50px;
            display: block;
            height: 16px;
            width: 16px;
            bottom: 0;
            position: absolute;
            transform: translateX(64px);
            animation: loading_713 3.5s ease both infinite;
            &::before {
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              background-color: #D1C2FF;
              border-radius: inherit;
              animation: loading2_713 3.5s ease both infinite;
            }
          }
        }
      }
      &-tips{
        color:#777;
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
