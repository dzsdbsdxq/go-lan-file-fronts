<template>
  <span style="color: red;padding:0px 5px;">
    <slot>
    {{content}}
    </slot>
  </span>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  endTime:{
    type: Number,
    default :''
  },
  endText:{
    type : String,
    default:'文件已经销毁'
  },
});
const endTime = ref(0);
const content = ref("");

watch(endTime,(n,o)=>{
  countDowmFunc(endTime.value)
})
onMounted(()=>{
  endTime.value = props.endTime
  countDowmFunc(endTime.value)
})
const countDowmFunc = (timestamp) => {
  let timer = setInterval(function(){
    let nowTime = new Date();
    let endTime = new Date(timestamp * 1000);
    let t = endTime.getTime() - nowTime.getTime();
    if(t>0){
      let day = Math.floor(t/86400000);
      let hour=Math.floor((t/3600000)%24);
      let min=Math.floor((t/60000)%60);
      let sec=Math.floor((t/1000)%60);
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      let format = '';
      if(day > 0){
        format = `${day}天${hour}小时${min}分${sec}秒`;
      }
      if(day <= 0 && hour > 0 ){
        format = `${hour}小时${min}分${sec}秒`;
      }
      if(day <= 0 && hour <= 0){
        format =`${min}分${sec}秒`;
      }
      content.value = format;
    }else{
      clearInterval(timer);
      content.value= props.endText;
    }
  },1000);
}
</script>
