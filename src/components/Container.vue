<template>
  <div class="container">
    <div class="container-zone">
      <div class="container-zone-page">
        <img class="container-zone-page-logo" src="../assets/mascot.svg" />
        <h1 class="container-zone-page-h1">FILE.SKI</h1>
        <p>Making Cooperation Easier. One Click Sharing, Always Smooth.</p>
        <small style="display: none" class="container-zone-page-notice">&gt;&gt;::&nbsp;&nbsp;服务器连接状态：【已连接】.已为您自动分配上传通道：{{store.getters.getUserId}}&nbsp;&nbsp;::&lt;&lt;</small>
      </div>

    </div>

  </div>

</template>

<script>
import store from "../store";

export default {
  name: "Container",
  computed: {
    store() {
      return store
    }
  }
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
      align-items: center;
      align-content: center;
      height: 100%;
      min-height: 400px;
      padding: 40px 0px 0px 0px;
      &-logo{
        width: 100px;

      }
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
        margin: 0px auto 10px auto;
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
