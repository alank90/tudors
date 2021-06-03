<template>
  <div class="container">
    <h1>Lady Jane Grey</h1>

    <ladyJaneBio></ladyJaneBio>
  </div>
</template>

<script>
import ladyJaneBio from "../components/ladyJaneGrey_Bio";

export default {
  components: { ladyJaneBio }
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
