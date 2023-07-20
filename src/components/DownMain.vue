<script setup>

</script>

<template>
  <div class="main">
    <div class="main-down">
      <div class="main-down-finished">
        <p class="main-down-finished-fileName">charles-proxy-4.6.4_amd64.tar.gz</p>
        <p class="main-down-finished-fileInfo">
          <span>Peers: </span>
          <span>0</span>
          <span> · Up: </span>
          <span>0 Bytes</span>
        </p>
        <div class="line-t-40"></div>
        <button class="main-down-finished-download">Download</button>
      </div>
    </div>
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
