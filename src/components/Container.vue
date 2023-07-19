<template>
  <div class="container">
    <div class="container-zone">
      <div class="container-zone-page">
        <h1 class="container-zone-page-h1">FilePizza</h1>
        <p>Free peer-to-peer file transfers in your browser.</p>
        <small class="container-zone-page-notice">We never store anything. Files only served fresh.</small>
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
        color: #b11c17;
        font: 700 56px/64px Lobster Two,sans-serif;
        text-align: center;
        margin: 0 0 25px;
      }
      p{
        color: #777;
        font: 18px/22px Quicksand,sans-serif;
        text-align: center;
        margin: 20px auto 10px auto;
      }
      small{
        color: #777;
        font: 12px/22px Quicksand,sans-serif;
        text-align: center;
        &.notice{
          margin: 0 0 10px;
        }
      }

    }

  }
}

</style>
