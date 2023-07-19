<template>
  <footer class="footer">
    <p class="footer-p">
      <strong>Like FilePizza?</strong>
      <span> Support its development! </span>
      <a href="" class="footer-p-donate">donate</a>
    </p>
    <p class="footer-p byline">
      <span>Cooked up by</span>
      <span> </span>
      <a href="#" target="_blank">Alex Kern</a>
      <span> </span>
      <span>&amp;</span>
      <span> </span>
      <a href="#" target="_blank">Neeraj Baid</a>
      <span> </span>
      <span>while eating </span>
      <strong>Sliver</strong>
      <span> @ UC Berkeley ·</span>
      <span> </span>
      <a href="#" target="_blank">FAQ</a>
      <span> </span>
      <span>·</span>
      <span> </span>
      <a href="#" target="_blank">Fork us</a>
    </p>

  </footer>


</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer{
  width: 100%;
  text-align: center;
  color: #777;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  border-radius: 5px 5px 0 0;
  background: #fff;
  -webkit-box-shadow: 0 -2px 4px #eee;
  box-shadow: 0 -2px 4px #eee;
  &-p{
    font: 12px/20px Quicksand,sans-serif;
    &-donate{
      border: 2px solid #3f6b29;
      border-radius: 4px;
      padding: 2px 5px;
      margin-right: 10px;
      background: #4bb74c;
      display: inline-block;
      cursor: pointer;
      -webkit-transition: all .25s ease;
      -moz-transition: all .25s ease;
      -o-transition: all .25s ease;
      -ms-transition: all .25s ease;
      transition: all .25s ease;
      font: 12px/1 Quicksand,sans-serif;
      color: #fff;
      text-decoration: none;
    }
    &.byline{
      padding: 0 10px;
    }
    a{
      color: #777;
    }
  }
}
</style>
