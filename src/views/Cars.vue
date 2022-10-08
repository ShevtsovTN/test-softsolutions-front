<template>
  <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Foto</th>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
          <th scope="col">Register Number</th>
          <th scope="col">Color</th>
          <th scope="col">Transmission</th>
          <th scope="col">Rent</th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="car in cars" :key="car.id">
          <th scope="row">{{ car.id }}</th>
          <td>
            <img :src="car.foto[0]?.url" alt="" />
          </td>
          <td>{{ car.model?.brand?.name }}</td>
          <td>{{ car.model?.name }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.register_number }}</td>
          <td><div class="p-3" :style="{ background: car.color }"></div></td>
          <td>{{ car.kpp }}</td>
          <td>{{ car.rent }} р/в сутки</td>
          <td>
            <button class="btn btn-warning">Edit Car</button>
          </td>
          <td>
            <button @click="delCar(car.id)" class="btn btn-danger">
              Del Car
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-outline-primary me-2 mb-2"
      :disabled="checkNextCarPage"
      @click="loadMoreCars"
    >
      Load More
    </button>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cars",

  setup() {
    const store = useStore();
    let counterPage = ref(1);

    onMounted(() => {
      store.dispatch("getCars", counterPage.value);
    });

    function loadMoreCars() {
      if (store.getters.checkNextCarPage) {
        store.dispatch("getCars", ++counterPage.value);
      }
    }

    return {
      cars: computed(() => store.getters.getCars),
      loading: computed(() => store.getters.getLoading),
      checkNextCarPage: computed(() => !store.getters.checkNextCarPage),
      delCar: (carId) => store.dispatch("deleteCar", carId),
      loadMoreCars,
    };
  },
};
</script>
