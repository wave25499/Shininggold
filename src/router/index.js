import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import ScanView from "../views/ScanView.vue";
import ScanBarView from "../views/ScanBarView.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/scan_bar",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/scan_box",
    name: "scan_box",
    component: ScanView,
  },
  {
    path: "/scan_bar2",
    name: "scan_bar",
    component: ScanBarView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
