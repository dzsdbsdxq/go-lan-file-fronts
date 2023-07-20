<template>
  <div class="rich_content home">
    <Container></Container>
    <down-main></down-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";
import DownMain from "@/components/DownMain.vue";

export default {
  name: 'DownView',
  components: {
    DownMain,
    Container,
  }
}
</script>

<style scoped>

</style>
