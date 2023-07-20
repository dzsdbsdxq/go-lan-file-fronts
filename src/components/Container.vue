<template>
  <div class="container">
    <div class="container-zone">
      <div class="container-zone-page">
        <h1 class="container-zone-page-h1">文传</h1>
        <p>端到端实时在线文件分享服务。分享更私密，真正做到无痕迹.</p>
        <small class="container-zone-page-notice">&gt;&gt;::&nbsp;&nbsp;服务器连接状态：【已连接】.已为您自动分配上传通道：fcb245b407b4f31f&nbsp;&nbsp;::&lt;&lt;</small>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped lang="scss">
.container{
  &-zone{
    &-page{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: stretch;
      align-content: stretch;
      height: 100%;
      min-height: 300px;
      padding: 40px 0px 0px 0px;
      &-h1{
        color: #4d4b4b;
        font: 700 56px/64px YSZ-FZZH,sans-serif;
        font-weight: 400;
        text-align: center;
        margin: 0 0 25px;
      }
      p{
        color: #777;
        font: 18px/22px Quicksand,sans-serif;
        text-align: center;
        margin: 20px auto 10px auto;
      }
      &-notice{
        font: 12px/22px Quicksand,sans-serif;
        text-align: center;
        margin: 0 0 10px;
        color: #4bb74c;
        text-underline: #4bb74c;
        text-decoration:underline;
      }

    }

  }
}

</style>
