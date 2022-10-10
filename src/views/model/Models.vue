<template>
  <div class="container mt-4">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="model in models" :key="model.id">
          <th scope="row">{{ model.id }}</th>
          <td>{{ model.brand?.name }}</td>
          <td>{{ model.name }}</td>
          <td>
            <router-link
              :to="{ name: 'model', params: { id: model.id } }"
              class="btn btn-warning"
              >Edit Model</router-link
            >
          </td>
          <td>
            <button @click="delModel(model.id)" class="btn btn-danger">
              Del Model
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-outline-primary me-2 mb-2"
      :disabled="checkNextModelPage"
      @click="loadMoreModels"
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
  name: "Models",
  setup() {
    const store = useStore();
    let counterPage = ref(1);

    onMounted(() => {
      store.dispatch("getModels", counterPage.value);
    });

    function loadMoreModels() {
      if (store.getters.checkNextModelPage) {
        store.dispatch("getModels", ++counterPage.value);
      }
    }

    return {
      models: computed(() => store.getters.getModels),
      loading: computed(() => store.getters.getLoading),
      checkNextModelPage: computed(() => !store.getters.checkNextModelPage),
      delModel: (modelId) => store.dispatch("deleteModel", modelId),
      loadMoreModels,
    };
  },
};
</script>

<style scoped></style>
