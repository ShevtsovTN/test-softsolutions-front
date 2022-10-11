<template>
  <div class="card m-4 p-2">
    <div class="row">
      <div class="col-6">
        <div id="carousel" class="carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="d-block img-thumbnail"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="d-block img-thumbnail"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-6">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ car.model?.brand?.name }}</h5>
          <h6 class="card-subtitle mb-4 text-muted">{{ car.model?.name }}</h6>
          <p class="card-text">
            <b>Color:</b>
            <span
              class="m-2 ps-5 pe-5 pt-2 pb-2"
              :style="{ background: car.color }"
            ></span>
          </p>
          <p class="card-text"><b>Transmission:</b> {{ car.kpp }}.</p>
          <p class="card-text">
            <b>Register number:</b> {{ car.register_number }}.
          </p>
          <p class="card-text"><b>Made in:</b> {{ car.year }}.</p>
          <p class="card-text"><b>Rent for:</b> {{ car.rent }} euros/month.</p>
          <RouterLink
            :to="{ name: 'carEdit', params: { id: carId } }"
            class="btn btn-primary"
            >Edit Car</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Car",
  setup() {
    const store = useStore();
    const route = useRoute();
    let carId = route.params.id;

    onMounted(() => {
      store.dispatch("getCar", route.params.id);
    });

    return {
      carId,
      car: computed(() => store.getters.getCar),
      loading: computed(() => store.getters.getLoading),
    };
  },
};
</script>
