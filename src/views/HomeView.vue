<template>
  <div class="rich_content home">
    <Container></Container>
    <upload-main></upload-main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Container from "@/components/Container.vue";
import UploadMain from "@/components/UploadMain.vue";

export default {
  name: 'HomeView',
  components: {
    UploadMain,
    Container,
    Footer
  }
}
</script>
