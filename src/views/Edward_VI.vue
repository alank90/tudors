<template>
  <div class="container">
    <h1>Edward the VI</h1>

    <edwardBio></edwardBio>
  </div>
</template>

<script>
import edwardBio from "../components/edward_VIBio.vue";

export default {
  components: {
    edwardBio: edwardBio
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
  text-align: center;
}

p {
  font-size: var(--font-size);
  font-family: var(--font-p);
}
</style>
