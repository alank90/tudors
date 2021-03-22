<template>
  <div class="container">
    <h1>Elizabeth the I</h1>

    <elizabeth-bio></elizabeth-bio>
  </div>
</template>

<script>
import elizabethBio from "./assets/elizabethBio.vue";

export default {
  components: {
    "elizabeth-bio": elizabethBio
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
}
</style>
