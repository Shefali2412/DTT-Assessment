import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("@/pages/HousesPage.vue") },
    { path: "/about",component: () => import("@/pages/AboutPage.vue"),},
  ],
});
