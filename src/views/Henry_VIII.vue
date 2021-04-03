<template>
  <div class="container">
    <h1>Henry the VIII</h1>

    <henryBio></henryBio>
  </div>
</template>

<script>
import henryBio from "../components/henry_VIIIBio.vue";

export default {
  components: {
    henryBio
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
