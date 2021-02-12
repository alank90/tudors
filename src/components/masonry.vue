<template>
  <div class="masonry">
    <div class="masonry-brick">
      <div class="masonry-content">
        <img
          src="../assets/img/henry_vii.webp"
          alt="Picture of Henry VII"
          class="masonry-content"
        />
        <h3 class="masonry-title">Henry VII</h3>
        <p class="masonry-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          voluptatum ex officia aliquam repellendus? Dolor repellat
          necessitatibus perferendis laborum quisquam.
        </p>
      </div>
    </div>
    <div class="masonry-brick">
      <div class="masonry-content">
        <img src="../assets/img/henry_viii.jpg" alt="Picture of Henry VIII" />
        <h3 class="masonry-title">Henry VIII</h3>
        <p class="memory-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, dolor.
          Commodi eius sequi explicabo eaque nemo velit tenetur corporis
          obcaecati!
        </p>
      </div>
    </div>
    <div class="masonry-brick">
      <div class="masonry-content">
        <img src="../assets/img/edward_vi.webp" alt="Picture of Edward VI" />
        <h3 class="masonry-title">Edward VI</h3>
        <p class="masonry-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          delectus? Deleniti, sit?
        </p>
      </div>
    </div>
    <div class="masonry-brick">
      <div class="masonry-content">
        <img src="../assets/img/mary_i.jpg" alt="Picture of Mary I" />
        <h3 class="masonry-title">Mary I</h3>
        <p class="masonry-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fuga
          ipsam.
        </p>
      </div>
    </div>
    <div class="masonry-brick">
      <div class="masonry-content">
        <img src="../assets/img/elizabeth_i.jpg" alt="Picture of Elizabeth I" />
        <h3 class="masonry-title">Elizabeth I</h3>
        <p class="masonry-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          omnis vel at minima velit.
        </p>
      </div>
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
    function resizeMasonryItem(item) {
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
      /* Get the grid object, its row-gap-, and the size of its implicit rows */
      const grid = document.getElementsByClassName("masonry")[0];
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowHeight = parseInt(
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
      const rowSpan = Math.ceil(
        (item.querySelector(".masonry-content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      /* Set the spanning as calculated above (S) */
      item.style.gridRowEnd = `span ${rowSpan}`;
    }
    function resizeAllMasonryItems() {
      /**
       * Apply spanning to all the masonry items
       *
       * Loop through all the items and apply the spanning to them using
       * `resizeMasonryItem()` function.
       *
       * @uses resizeMasonryItem
       */

      // Get all item class objects in one list
      const allItems = document.getElementsByClassName("masonry-brick");

      /* Ok now we want to loop thru the whole HTMLCollection and execute the
       * spanning function to each list-item (i.e. each .masonry-item)
       */
      for (let i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
      }
    }
    function waitForImages() {
      /**
       * Resize the items when all the images inside the masonry grid
       * finish loading. This will ensure that all the content inside our
       * masonry items are visible.
       *
       * @uses ImagesLoaded
       * @uses resizeMasonryItem
       */
      const allItems = document.getElementsByClassName("masonry-brick");
      for (var i = 0; i < allItems.length; i++) {
        // imagesLoaded is imported via a <script> tag in index.html
        // eslint-disable-next-line no-undef
        imagesLoaded(allItems[i], function(instance) {
          const item = instance.elements[0];
          resizeMasonryItem(item);
        });
      }
    }

    /* Resize all the grid items on the load and resize events */
    const masonryEvents = ["load", "resize"];
    masonryEvents.forEach(function(event) {
      window.addEventListener(event, resizeAllMasonryItems);
    });

    /* Do a resize once more when all the images finish loading */
    waitForImages();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* :root {
  counter-reset: masonry;
} */

/* Masonry CSS */
.masonry {
  display: grid;
  grid-gap: 1em; /* [1] Add some gap between rows and columns */
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* [2] Make columns adjust according to the available viewport */
  grid-auto-rows: 0; /* [3] Set the height for implicitly-created row track */
}

.masonry-brick {
  color: #2f3640;
  background-color: #f5f6fa;
  opacity: 0.75;
  transition: opacity 0.25s ease-in-out;
}

.masonry-brick:hover {
  opacity: 1;
}

.masonry-title,
.masonry-description {
  margin: 0;
}

.masonry-title {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
}

.masonry-description {
  padding: 1.5rem;
  font-size: 0.75rem;
  border-top: 1px solid #eee;
  color: #666;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

/* .masonry-item,
.masonry-item img {
  position: relative;
} */

/* .masonry-item:after {
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
} */
</style>
