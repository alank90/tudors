<template>
  <div class="home">
    <h1>The Tudors</h1>
    <img src="../assets/img/Tudor_Rose.svg" alt="" />
    <h2>A History of the House of Tudor (1485-1603)</h2>
    <masonry />
  </div>
</template>

<script>
// @ is an alias to /src
import masonry from "@/components/masonry.vue";

export default {
  name: "Home",
  components: {
    masonry
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ballet&display=swap");

h1 {
  font-family: "Ballet", cursive;
  font-size: 3.4rem;
}

img {
  width: 105px;
}
</style>
