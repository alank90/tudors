<template>
  <div class="masonry">
    <div class="masonry-item col--2x">
      <img
        src="../assets/img/henry_vii.webp"
        alt="Picture of Henry VII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item col--3x">
      <img
        src="../assets/img/henry_viii.jpg"
        alt="Picture of Henry VIII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item col--2x">
      <img
        src="../assets/img/edward_vi.webp"
        alt="Picture of Edward VI"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item col--2x">
      <img
        src="../assets/img/mary_i.jpg"
        alt="Picture of Mary I"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item col--3x">
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
  mounted() {
    /**
     * Set appropriate spanning to any masonry item
     *
     * Get different properties we already set for the masonry, calculate
     * height or spanning for any cell of the masonry grid based on its
     * content-wrapper's height, the (row) gap of the grid, and the size
     * of the implicit row tracks.
     *
     * @param item Object A brick/tile/cell inside the masonry
     */
    function resizeMasonryItem(item) {
      /* Get the grid object, its row-gap-, and the size of its implicit rows */
      const grid = document.getElementsByClassName("masonry")[0];
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
    }
  }
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
  grid-gap: 1em; /* [1] Add some gap between rows and columns */
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* [2] Make columns adjust according to the available viewport */
  grid-auto-rows: 0; /* [3] Set the height for implicitly-created row track */
}

.masonry-item {
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.col--2x {
  grid-row-end: span 2;
}

.col--3x {
  grid-row-end: span 3;
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
