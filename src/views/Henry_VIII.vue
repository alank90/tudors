<template>
  <div class="container">
    <h1>Henry the VIII</h1>
    <router-link to="TheSixWives">
      <img
        src="../assets/img/six_wives.jpg"
        alt="Six Wives of Henry the VIII"
        title="Click to find out more about Henry the VIII's wives "
      />
    </router-link>
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
}

p {
  font-size: var(--font-size);
  font-family: var(--font-p);
}

img {
  float: right;
  cursor: pointer;
  width: 400px;
  border-radius: 7px;
}
</style>
