<template>
  <footer class="footer">
    <p class="footer-p">
      <strong>File.SKI</strong>
      <span> Support its development! </span>
      <a href="javascript:void(0);" @click="alertDonateDialog" class="footer-p-donate">donate</a>
    </p>
    <p class="footer-p byline">
      <span>2023 © File.Ski </span>
      <span> </span>
      <span>&amp;</span>
      <span> </span>
      <span> Powered by</span>
      <span> </span>
      <a href="https://www.haoba.cc" target="_blank"> 咸菜拌白饭</a>
<!--      <strong>Sliver</strong>-->
<!--      <span> @ UC Berkeley ·</span>-->
<!--      <span> </span>-->
<!--      <a href="#" target="_blank">FAQ</a>-->
<!--      <span> </span>-->
<!--      <span>·</span>-->
<!--      <span> </span>-->
<!--      <a href="#" target="_blank">Star us</a>-->
    </p>
  </footer>
  <teleport to='body'>
    <DonateDialog v-show="showDonate" v-on:closeDonate="alertDonateDialog"></DonateDialog>
  </teleport>


</template>

<script setup>
import {ref} from "vue";
import DonateDialog from "@/components/DonateDialog.vue";
const showDonate = ref(false)
const alertDonateDialog = () => {
  showDonate.value = !showDonate.value;
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
