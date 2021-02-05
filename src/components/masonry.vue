<template>
  <div class="masonry">
    <h1>{{ msg }}</h1>
    <div class="masonry-item">
      <img
        :src="require('@/assets/img/armour.jpg')"
        alt="Picture of Henry VII"
        class="masonry-content"
      />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import imagesrc from "../assets/img/tudor_rose.png";
export default {
  name: "masonry",
  data() {
    return {
      imagesrc: imagesrc
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  counter-reset: masonry;
}
</style>
