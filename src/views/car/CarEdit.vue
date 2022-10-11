<template>
  <div class="container m-2">
    <CarForm></CarForm>
  </div>
</template>

<script>
import CarForm from "@/components/forms/CarForm.vue";
import { computed, onMounted, provide } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "CarEdit",
  components: { CarForm },

  setup() {
    const store = useStore();
    const route = useRoute();

    let carId = route.params.id;

    provide("car", store.getters.getCar);

    onMounted(() => {
      store.dispatch("getCar", carId);
    });

    return {
      car: computed(() => store.getters.getCar),
      loading: computed(() => store.getters.getLoading),
    };
  },
};
</script>
