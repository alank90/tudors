<template>
  <div class="masonry">
    <h1>{{ msg }}</h1>
    <div class="masonry-item">
      <img
        src="../assets/img/Henry_VII.webp"
        alt="Picture of Henry VII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/Henry_VIII.jpg"
        alt="Picture of Henry VIII"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/Edward_VI.webp"
        alt="Picture of Edward VI"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/Mary_I.jpg"
        alt="Picture of Mary I"
        class="masonry-content"
      />
    </div>
    <div class="masonry-item">
      <img
        src="../assets/img/Elizabeth_I.jpg"
        alt="Picture of Elizabeth I"
        class="masonry-content"
      />
    </div>
  </div>
</template>

<script>
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
export default {
  name: "masonry",
  data() {
    return {};
  },
  props: {
    msg: String
  },
  mounted() {
    function resizeMasonryItem(item) {
      /* Get the grid object, its row-gap, and the size of its implicit rows */
      var grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );

      /*
       * Spanning for any brick = S
       * Grid's row-gap = G
       * Size of grid's implicitly create row-track = R
       * Height of item content = H
       * Net height of the item = H1 = H + G
       * Net height of the implicit row-track = T = G + R
       * S = H1 / T
       */
      var rowSpan = Math.ceil(
        (item.querySelector(".masonry-content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      /* Set the spanning as calculated above (S) */
      item.style.gridRowEnd = "span " + rowSpan;

      /* Make the images take all the available space in the cell/item */
      item.querySelector(".masonry-content").style.height = rowSpan * 10 + "px";
    }

    /**
     * Apply spanning to all the masonry items
     *
     * Loop through all the items and apply the spanning to them using
     * `resizeMasonryItem()` function.
     *
     * @uses resizeMasonryItem
     */
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
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 0;
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
