<template>
  <nav class="navbar bg-light d-flex justify-content-around">
    <div class="col-10 d-flex justify-content-start align-items-center">
      <RouterLink class="nav-link m-3" :to="{ name: 'main' }">Main</RouterLink>
      <RouterLink class="nav-link m-3" :to="{ name: 'brands' }"
        >Brands</RouterLink
      >
      <RouterLink class="nav-link m-3" :to="{ name: 'models' }"
        >Models</RouterLink
      >
      <RouterLink class="nav-link m-3" :to="{ name: 'cars' }">Cars</RouterLink>
    </div>
    <div v-if="isAuth" class="col-2 d-flex align-items-center">
      <div class="col-6">{{ user.name }}</div>
      <button @click="logout" class="btn btn-primary">Log Out</button>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "NavPanel",
  setup() {
    const store = useStore();
    const router = useRouter();

    function logout() {
      store.dispatch("logout");
      router.push({ name: "login" });
    }

    return {
      isAuth: computed(() => store.getters.isAuth),
      user: computed(() => store.getters.getUser),
      logout,
    };
  },
};
</script>

<style>
.router-link-active {
  font-size: 110%;
}
</style>
