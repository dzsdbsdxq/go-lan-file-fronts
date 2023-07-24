<template>
  <div class="rich_content">
    <div id="donate-overlay" style="position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background-color: rgba(0,0,0,.7);z-index:2001;"></div>
    <div id="donate-dialog-div" class="donate-dialog" style="width: 400px;z-index: 2002;">
      <div class="d-header">服务器资源有限，大佬赞助点吧！</div>
      <div class="d-content">
        <div class="d-message" style="padding-top: 8px;color: #646566;">
          <img style="width: 300px;padding: 15px 0px;" src="../assets/sponsor_wx.png">
        </div>
      </div>
      <div class="d-footer">
        <div @click="closeDonateDialog" class="d-text">微信已扫</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DonateDialog",
  setup(props,{emit}){
    const closeDonateDialog = () => {
      emit("closeDonate");
    }
    return {
      closeDonateDialog
    }
  }
}
</script>

<style scoped lang="scss">
.donate-dialog{
  position: fixed;
  top: 45%;
  left: 50%;
  width: 320px;
  overflow: hidden;
  font-size: 16px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-transform: translate3d(-50%,-50%,0);
  transform: translate3d(-50%,-50%,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: .3s;
  transition: .3s;
  -webkit-transition-property: opacity,-webkit-transform;
  transition-property: opacity,-webkit-transform;
  transition-property: transform,opacity;
  transition-property: transform,opacity,-webkit-transform;
  .d-header{
    padding-top: 26px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
  .d-content{
    .d-message{
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      max-height: 60vh;
      overflow-y: auto;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      word-wrap: break-word;
    }
  }
  .d-footer{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-appearance: none;
    color: #ee0a24;
    border-top: 1px solid rgba(0,0,0,0.1);
    .d-text{
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      height: 100%;
    }
  }
}
</style>
