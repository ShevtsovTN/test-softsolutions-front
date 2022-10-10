import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import Brands from "@/views/brand/Brands.vue";
import Brand from "@/views/brand/Brand.vue";
import Car from "@/views/car/Car.vue";
import Cars from "@/views/car/Cars.vue";
import Models from "@/views/model/Models.vue";
import Model from "@/views/model/Model.vue";
import Main from "@/views/Main.vue";
import store from "@/store";
import CarsLayout from "@/views/layouts/CarsLayout.vue";
import ModelsLayout from "@/views/layouts/ModelsLayout.vue";
import BrandsLayout from "@/views/layouts/BrandsLayout.vue";

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
      component: BrandsLayout,
      children: [
        {
          path: "",
          name: "brands",
          component: Brands,
        },
        {
          path: ":id",
          name: "brand",
          component: Brand,
        },
      ],
    },
    {
      path: "/cars",
      component: CarsLayout,
      children: [
        {
          path: "",
          name: "cars",
          component: Cars,
        },
        {
          path: ":id",
          name: "car",
          component: Car,
        },
      ],
    },
    {
      path: "/models",
      component: ModelsLayout,
      children: [
        {
          path: "",
          name: "models",
          component: Models,
        },
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
