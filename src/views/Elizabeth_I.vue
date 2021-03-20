<template>
  <div class="container">
    <h1>Elizabeth the I</h1>

    <div v-html="Elizabeth_I"></div>
  </div>
</template>

<script>
import Elizabeth_I from "./assets/elizabeth_I";

export default {
  name: Elizabeth_I,
  data() {
    return {
      Elizabeth_I: Elizabeth_I
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
}
</style>
