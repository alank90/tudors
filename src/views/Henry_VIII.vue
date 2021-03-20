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
    <div v-html="Henry_VIII"></div>
  </div>
</template>

<script>
import Henry_VIII from "./assets/henry_viii";

export default {
  name: Henry_VIII,
  data() {
    return {
      Henry_VIII: Henry_VIII
    };
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
