<template>
  <Container></Container>
  <upload-main :key="Math.random()"></upload-main>
</template>
<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";
import UploadMain from "@/components/UploadMain.vue";

export default {
  name: 'HomeView',
  components: {
    UploadMain,
    Container,
  }
}
</script>
