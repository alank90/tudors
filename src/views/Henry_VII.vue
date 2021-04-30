<template>
  <div class="container">
    <h1>Henry the VII</h1>

    <henry_VIIBio></henry_VIIBio>
  </div>
</template>

<script>
import henry_VIIBio from "../components/henry_VIIBio.vue";

export default {
  components: {
    henry_VIIBio
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
