import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function() {
      return import(/* webpackChunkName: "Home" */ "../views/Home")
    }
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: function() {
      return import(/* webpackChunkName: "Timeline" */ "../views/Timeline")
    }
  },
  {
    path: "/Henry_VII",
    name: "Henry_VII",
    component: function() {
      return import(/* webpackChunkName: "Henry_VII" */ "../views/Henry_VII")
    }
  },
  {
    path: "/Henry_VIII",
    name: "Henry_VIII",
    component: function() {
      return import(/* webpackChunkName: "Henry_VIII" */ "../views/Henry_VIII")
    }
  },
  {
    path: "/TheSixWives",
    name: "The_Six_Wives",
    component: function() {
      return import(/* webpackChunkName: "TheSixWives" */ "../views/TheSixWives")
    }
  },
  {
    path: "/Edward_VI",
    name: "Edward_VI",
    component: function() {
      return import(/* webpackChunkName: "Edward_VI" */ "../views/Edward_VI")
    }
  },
  {
    path: "/Lady_Jane_Grey",
    name: "Lady_Jane_Grey",
    component: function() {
      return import(/* webpackChunkName: "LadyJaneGrey" */ "../views/LadyJaneGrey")
    }
  },
  {
    path: "/Mary_I",
    name: "Mary_I",
    component: function() {
      return import(/* webpackChunkName: "Mary_I" */ "../views/Mary_I")
    }
  },
  {
    path: "/Elizabeth_I",
    name: "Elizabeth_I",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Elizabeth_I");
    }
  },
  {
    path: "/Elizabethan_Men",
    name: "Elizabethan_Men",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Elizabethan_Men")
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
