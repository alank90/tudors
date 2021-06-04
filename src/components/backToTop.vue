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
      document.addEventListener(
        "scroll",
        function() {
          const backToTopButton = document.querySelector(".goTop");
          const scrollTop = window.scrollY;
          if (scrollTop > 250) {
            backToTopButton.addClass("isVisible");
            this.isVisible = true;
          } else {
            backToTopButton.removeClass("isVisible");
            this.isVisible = false;
          }
        }.bind(this)
      );
    },
    backToTop: function() {
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
  background-color: #010e1b;
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
  background-color: #010e1b;
  background-color: rgba(1, 14, 27, 0.9);
  opacity: 1;
}

.isVisible {
  opacity: 0.8;
  transition: all 0.4s ease-in;
  z-index: 99;
}
</style>
