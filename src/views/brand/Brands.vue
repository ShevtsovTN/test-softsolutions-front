<template>
  <div class="container mt-4">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="brand in brands" :key="brand.id">
          <th scope="row">{{ brand.id }}</th>
          <td>{{ brand.name }}</td>
          <td>
            <router-link
              :to="{ name: 'brand', params: { id: brand.id } }"
              class="btn btn-warning"
              >Edit Brand</router-link
            >
          </td>
          <td>
            <button @click="delBrand(brand.id)" class="btn btn-danger">
              Del Brand
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-outline-primary me-2 mb-2"
      :disabled="checkNextBrandPage"
      @click="loadMoreBrands"
    >
      Load More
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Brands",
  setup() {
    const store = useStore();
    let counterPage = ref(1);

    onMounted(() => {
      store.dispatch("getBrands", counterPage.value);
    });

    function loadMoreBrands() {
      if (store.getters.checkNextBrandPage) {
        store.dispatch("getBrands", ++counterPage.value);
      }
    }

    return {
      brands: computed(() => store.getters.getBrands),
      loading: computed(() => store.getters.getLoading),
      checkNextBrandPage: computed(() => !store.getters.checkNextBrandPage),
      delBrand: (brandId) => store.dispatch("deleteBrand", brandId),
      loadMoreBrands,
    };
  },
};
</script>
