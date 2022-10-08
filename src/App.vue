<script>
import NavPanel from "@/components/navigation/NavPanel.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MainPage",
  components: { NavPanel },
  setup() {
    const store = useStore();
    return {
      isAuth: computed(() => store.getters.isAuth),
    };
  },
};
</script>

<template>
  <NavPanel v-if="isAuth" />
  <RouterView />
</template>
