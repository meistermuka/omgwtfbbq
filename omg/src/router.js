import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginForm from "./components/Auth/LoginForm.vue";
import SignUpForm from "./components/Auth/SignUpForm.vue";
import Secure from "./components/Auth/Secure.vue";
import Produce from "./views/Produce.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpForm
    },
    {
      path: "/produce",
      name: "produce",
      component: Produce
    },
    {
      path: "/secure",
      name: "secure",
      component: Secure,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
})

export default router