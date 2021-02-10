<template>
  <div class="home">
    <h1>The Tudors</h1>
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
