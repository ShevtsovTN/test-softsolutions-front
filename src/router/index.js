import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import Brands from "@/views/Brands.vue";
import Brand from "@/views/Brand.vue";
import Car from "@/views/Car.vue";
import Cars from "@/views/Cars.vue";
import Models from "@/views/Models.vue";
import Model from "@/views/Model.vue";
import Main from "@/views/Main.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/admin/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/brands",
      name: "brands",
      component: Brands,
      children: [
        {
          path: ":id",
          name: "brand",
          component: Brand,
        },
      ],
    },
    {
      path: "/cars",
      name: "cars",
      component: Cars,
      children: [
        {
          path: ":id",
          name: "car",
          component: Car,
        },
      ],
    },
    {
      path: "/models",
      name: "models",
      component: Models,
      children: [
        {
          path: ":id",
          name: "model",
          component: Model,
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const isAuth = store.getters.isAuth;
  if (!isAuth && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
