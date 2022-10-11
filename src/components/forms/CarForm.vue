<template>
  <h1>{{ title }}</h1>
  <form
    class="row mt-2 g-3 needs-validation"
    novalidate
    @submit.prevent="submit(car?.id)"
  >
    <div class="col-md-6">
      <label for="validationBrand" class="form-label"><b>Brand:</b></label>
      <select
        :class="{
          'is-invalid': !form.brand.valid && form.brand.touched,
          'is-valid': form.brand.valid,
        }"
        @blur="form.brand.blur"
        v-model="form.brand.value"
        class="form-select"
        aria-label="validationBrand"
      >
        <option v-if="car" selected :value="car?.model?.brand?.id">
          {{ car?.model?.brand?.name }}
        </option>
        <option v-for="brand in brands" :key="brand.id" :value="brand.id">
          {{ brand.name }}
        </option>
      </select>
      <small class="invalid-feedback" v-if="form.brand.errors.required">
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.brand.valid">
        Looks good!
      </small>
    </div>
    <div class="col-md-6">
      <label for="validationModel" class="form-label"><b>Model:</b></label>
      <select
        :class="{
          'is-invalid': !form.model.valid && form.model.touched,
          'is-valid': form.model.valid,
        }"
        @blur="form.model.blur"
        v-model="form.model.value"
        class="form-select"
        aria-label="validationModel"
      >
        <option v-if="car" selected :value="car?.model?.id">
          {{ car?.model?.name }}
        </option>
        <option v-for="model in models" :key="model.id" :value="model.id">
          {{ model.name }}
        </option>
      </select>
      <small class="invalid-feedback" v-if="form.model.errors.required">
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.model.valid">
        Looks good!
      </small>
    </div>
    <!--    <div class="col-md-6">-->
    <!--      <label for="validationDescription" class="form-label">Description</label>-->
    <!--      <input-->
    <!--        type="text"-->
    <!--        class="form-control"-->
    <!--        id="validationDescription"-->
    <!--        :class="{-->
    <!--          'is-invalid': !form.description.valid && form.description.touched,-->
    <!--          'is-valid': form.description.valid,-->
    <!--        }"-->
    <!--        @blur="form.description.blur"-->
    <!--        v-model="form.description.value"-->
    <!--      />-->
    <!--      <small class="text-muted"-->
    <!--        >min 10 / {{ form.description.value.length }} / max 255</small-->
    <!--      >-->
    <!--      <small class="invalid-feedback" v-if="form.description.errors.minLength">-->
    <!--        The number of characters is less than the allowed number!-->
    <!--      </small>-->
    <!--      <small class="invalid-feedback" v-if="form.description.errors.maxLength">-->
    <!--        You have exceeded the allowed number of characters!-->
    <!--      </small>-->
    <!--      <small class="valid-feedback" v-if="form.description.valid">-->
    <!--        Looks good!-->
    <!--      </small>-->
    <!--    </div>-->
    <!--    <div class="col-md-12">-->
    <!--      <label for="validationContent" class="form-label">Content</label>-->
    <!--      <textarea-->
    <!--        class="form-control"-->
    <!--        id="validationContent"-->
    <!--        :class="{-->
    <!--          'is-invalid': !form.content.valid && form.content.touched,-->
    <!--          'is-valid': form.content.valid,-->
    <!--        }"-->
    <!--        @blur="form.content.blur"-->
    <!--        v-model="form.content.value"-->
    <!--      ></textarea>-->
    <!--      <small class="text-muted"-->
    <!--        >min 50 / {{ form.content.value.length }} / max 1500</small-->
    <!--      >-->
    <!--      <small class="invalid-feedback" v-if="form.content.errors.minLength">-->
    <!--        The number of characters is less than the allowed number!-->
    <!--      </small>-->
    <!--      <small class="invalid-feedback" v-if="form.content.errors.maxLength">-->
    <!--        You have exceeded the allowed number of characters!-->
    <!--      </small>-->
    <!--      <small class="valid-feedback" v-if="form.content.valid">-->
    <!--        Looks good!-->
    <!--      </small>-->
    <!--    </div>-->
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Edit Car</button>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { computed, inject, onMounted, reactive } from "vue";
import { useForm } from "@/helpers/form";
import { maxLength, minLength, required } from "@/helpers/validation";

export default {
  name: "CarForm",

  setup() {
    const store = useStore();
    const car = inject("car");

    const title = car ? "Editing Car" : "Creating new car";

    onMounted(() => {
      store.dispatch("getBrands");
      store.dispatch("getModels");
    });

    const formValidParams = {
      year: {
        minLength: 4,
        maxLength: 4,
      },
      register_number: {
        minLength: 4,
        maxLength: 4,
      },
      color: {
        minLength: 4,
        maxLength: 4,
      },
      kpp: {
        minLength: 4,
        maxLength: 4,
      },
      rent: {
        minLength: 1,
        maxLength: 8,
      },
    };

    const form = useForm({
      model: {
        value: car?.model?.name ? car.model.name : "",
        validators: {
          required,
        },
      },
      brand: {
        value: car?.model?.brand?.name ? car?.model?.brand?.name : "",
        validators: {
          required,
        },
      },
      year: {
        value: car?.year ? car?.year : "",
        validators: {
          minLength: minLength(formValidParams.year.minLength),
          maxLength: maxLength(formValidParams.year.maxLength),
        },
      },
      register_number: {
        value: car?.register_number ? car?.register_number : "",
        validators: {
          minLength: minLength(formValidParams.register_number.minLength),
          maxLength: maxLength(formValidParams.register_number.maxLength),
        },
      },
      color: {
        value: car?.color ? car?.color : "",
        validators: {
          minLength: minLength(formValidParams.color.minLength),
          maxLength: maxLength(formValidParams.color.maxLength),
        },
      },
      kpp: {
        value: car?.kpp ? car?.kpp : "",
        validators: {
          minLength: minLength(formValidParams.kpp.minLength),
          maxLength: maxLength(formValidParams.kpp.maxLength),
        },
      },
      rent: {
        value: car?.rent ? car?.rent : "",
        validators: {
          minLength: minLength(formValidParams.rent.minLength),
          maxLength: maxLength(formValidParams.rent.maxLength),
        },
      },
    });

    function submit(carId = null) {
      const data = reactive({});
      for (const [key, value] of Object.entries(form)) {
        if (value.value !== "") {
          data[key] = value.value;
        }
      }
      if (Object.keys(data).length !== 0) {
        if (car && carId) {
          store.dispatch("updateCar", { carId, data });
        } else {
          store.dispatch("createCar", { data });
        }
      }
    }

    return {
      car,
      title,
      brands: computed(() => store.getters.getBrands),
      models: computed(() => store.getters.getModels),
      loading: computed(() => store.getters.getLoading),
      form,
      submit,
    };
  },
};
</script>
