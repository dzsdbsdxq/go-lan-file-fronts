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
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -o-box-orient: vertical;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -o-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      height: 100%;
      min-height: 300px;
      padding: 40px 0px 0px 0px;
      &-h1{
        color: #b11c17;
        font: 700 56px/64px Lobster Two,sans-serif;
        text-align: center;
        margin: 0 0 10px;
      }
      p{
        color: #777;
        font: 18px/22px Quicksand,sans-serif;
        text-align: center;
        margin: 0;
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
