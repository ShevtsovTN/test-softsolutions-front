<template>
  <nav
    class="navbar navbar-expand-lg bg-light d-flex w-100 justify-content-around"
  >
    <div class="col-6 d-flex w-100">
      <RouterLink class="nav-link" to="/brands">Brands</RouterLink>
      <RouterLink class="nav-link" to="/models">Models</RouterLink>
      <RouterLink class="nav-link" to="/cars">Cars</RouterLink>
    </div>
    <div v-if="isAuth" class="col-6">Username</div>
    <div v-else class="col-6">Logout</div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "NavPanel",
  setup() {
    const store = useStore();

    return {
      isAuth: computed(() => store.getters.isAuth),
    };
  },
};
</script>
