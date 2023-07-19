<template>
  <div class="rich_content home">
    <Container></Container>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/Footer.vue";
import Container from "@/components/Container.vue";

export default {
  name: 'HomeView',
  components: {
    Container,
    Footer
  }
}
</script>
