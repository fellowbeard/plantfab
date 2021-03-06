import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
import PlantShowView from "../views/PlantShowView.vue";
import FavIndexView from "../views/FavIndexView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "plants-index",
    component: IndexView,
  },
  {
    path: "/plants/:id",
    name: "plants-show",
    component: PlantShowView,
  },
  {
    path: "/favorites",
    name: "favorites-index",
    component: FavIndexView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
