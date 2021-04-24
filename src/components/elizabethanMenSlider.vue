<template>
  <div class="slider-container">
    <div class="image-container">
      <img
        src="../assets/img/elizabethsMen/earlofEssex.jpg"
        alt="The Earl of Essex"
      />

      <img
        src="../assets/img/elizabethsMen/francis_bacon.jpg"
        alt="The Earl of Essex"
      />
      <img
        src="../assets/img/elizabethsMen/chris_hatton.jpg"
        alt="Chris Hatton"
      />

      <img
        src="../assets/img/elizabethsMen/will_shakespeare.jpg"
        alt="William Shakespeare"
      />
    </div>

    <svg xmlns="http://www.w3.org/2000/svg">
      <path stroke-width="6" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "slider",
  mounted() {
    // ===== Vars ========= //
    const imageItems = document.querySelectorAll("img"),
      sliderPath = document.querySelector("svg path");

    // ======== Functions ==================== //
    function drawPath() {
      let path = [];

      imageItems.forEach((item, i) => {
        if (i === 0) {
          const imagePosition1 = item.getBoundingClientRect();
          const imagePosition2 = imageItems[i + 1].getBoundingClientRect();
          console.log({ imagePosition2 });
          // Right edge of current image
          const x1 = imagePosition1.right;
          const y = imagePosition1.bottom + imagePosition1.height / 2;
          // Left edge of next image
          const x2 = imagePosition2.left;

          path.push("M", x1, y, "L", x2, y);
          item.pathStart = 0;
        }

        sliderPath.setAttribute("d", path.join(" "));
      });
    }

    // ======== Draw Slider Line ================== //
    drawPath();
  }
};
</script>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
}

.image-container > img {
  width: 100px;
  height: auto;
}
</style>
