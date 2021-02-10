<template>
  <div class="masonry">
    <div class="masonry-item">
      <img
        src="../assets/img/henry_vii.webp"
        alt="Picture of Henry VII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/henry_viii.jpg"
        alt="Picture of Henry VIII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/edward_vi.webp"
        alt="Picture of Edward VI"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/mary_i.jpg"
        alt="Picture of Mary I"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/elizabeth_i.jpg"
        alt="Picture of Elizabeth I"
        class="masonry-content"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "masonry",
  data() {
    return {};
  },
  props: {
    msg: String
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  counter-reset: masonry;
}

/* Masonry CSS */
.masonry {
  display: grid;
  grid-gap: 2em; /* [1] Add some gap between rows and columns */
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* [2] Make columns adjust according to the available viewport */
  grid-auto-rows: 250px; /* [3] Set the height for implicitly-created row track */
}

.masonry-item {
  border-radius: 5px;
}

.masonry-item {
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.masonry-item,
.masonry-item img {
  position: relative;
}

.masonry-item:after {
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  content: counter(masonry);
  counter-increment: masonry;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}

.masonry-item:hover::after {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
