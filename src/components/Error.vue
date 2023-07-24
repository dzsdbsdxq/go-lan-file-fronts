<template>
  <div class="error">
    <div class="error-heading">{{message}}</div>
    <div class="error-reload">
      <a href="/">返回首页</a></div>
  </div>


</template>

<script>
export default {
  name: "Error",
  props:{
    message:{
      type:String,
      default:"404"
    }
  }
}
</script>

<style scoped lang="scss">
.error{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &-heading{
    text-align: center;
    font-size: 9em;
    line-height: 1.3em;
    margin: 2rem 0 0.5rem 0;
    padding: 0;
    text-shadow: 0 0 1rem #fefefe;
    font-family:Arial;
    color:#b4b4b4;
  }
  &-wrapper{
    position: relative;
    width: 200px;
    height: 200px;
  }
  &-reload{
    width: 100px;
    text-align: center;
    background: #FFFFFF;
    padding: 8px 16px;
    cursor: pointer;
    border: 2px solid #ADD7F9;
    border-radius: 5px;
    color: #ADD7F9;
    font-weight: 600;
    transition: transform 0.1s;
    user-select: none;
    margin-top: 60px;
    a{
      color:#ADD7F9;
      text-decoration:none;
    }
    &:hover {
      transform: translate(0, -2px);
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
    }
  }

}
</style>
