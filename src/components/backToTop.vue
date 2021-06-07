<template>
  <button class="goTop" v-if="isVisible" @click="backToTop">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },

  methods: {
    initToTopButton: function() {
      document.addEventListener("scroll", () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        console.log("scrollTop is ", scrollTop);
        console.log(` viewportis $, ${viewportHeight}`);
        if (scrollTop > viewportHeight) {
          this.isVisible = true;
          if (document.querySelector(".goTop")) {
            const backToTopButton = document.querySelector(".goTop");
            backToTopButton.classList.add("isVisible");
            console.log(`${backToTopButton}`);
          }
        } else {
          if (document.querySelector(".goTop")) {
            const backToTopButton = document.querySelector(".goTop");
            backToTopButton.classList.remove("isVisible");
            this.isVisible = false;
            console.log(`${backToTopButton}`);
          }
        }
      });
    },
    backToTop: function() {
      const el = document.querySelector("html");
      console.log(`The el is ${el}`);
      el.scrollTop = 0;
      console.log(`The scrollTop should now be zero : ${el.scrollTop}`);

      /* $("html,body")
        .stop()
        .animate(
          {
            scrollTop: 0
          },
          "slow",
          "swing"
        ); */
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initToTopButton();
    });
  }
};
</script>

<style scoped>
@import url("https://use.fontawesome.com/releases/v5.4.1/css/all.css");

.goTop {
  background-color: rgba(1, 14, 27, 0.7);
  border: none;
  border-radius: 50%;
  bottom: 45px;
  display: block;
  height: 65px;
  opacity: 0;
  position: fixed;
  right: 20px;
  width: 65px;
  z-index: -1;
}

.goTop .fa {
  color: white;
  font-size: 40px;
}

.goTop:hover {
  background-color: rgba(1, 14, 27, 0.9);
  opacity: 1;
}

.isVisible {
  opacity: 0.8;
  transition: all 0.4s ease-in;
  z-index: 99;
}
</style>
