<template>
  <div class="container m-2">
    <CarForm></CarForm>
  </div>
</template>

<script>
import CarForm from "@/components/forms/CarForm.vue";

export default {
  name: "CarCreate",
  components: { CarForm },
};
</script>
