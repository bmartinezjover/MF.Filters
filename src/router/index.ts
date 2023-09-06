import { createRouter, createWebHistory } from "vue-router";
import FilterView from "../views/FilterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FilterView,
    },
  ],
});

export default router;
