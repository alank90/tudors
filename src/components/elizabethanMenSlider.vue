<template>
  <div class="slider-container">
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
</template>

<script>
export default {
  name: "slider"
};
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
}

.slider-container > img {
  width: 100px;
  height: auto;
}
</style>
