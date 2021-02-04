<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <masonry msg="Welcome to a History of The Tudors" />
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
