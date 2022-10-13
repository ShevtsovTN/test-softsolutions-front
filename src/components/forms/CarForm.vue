<template>
  <h1>{{ title }}</h1>
  <form
    class="row mt-2 g-3 needs-validation"
    novalidate
    enctype="multipart/form-data"
    @submit.prevent="submit(car?.id)"
  >
    <div class="col-md-4">
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
        <option v-if="car" :value="car?.model?.brand?.name">
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
    <div class="col-md-4">
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
        <option v-if="car" selected :value="car?.model?.name">
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
    <div class="col-md-4">
      <label for="validationKpp" class="form-label"><b>Transmission:</b></label>
      <select
        :class="{
          'is-invalid': !form.kpp.valid && form.kpp.touched,
          'is-valid': form.kpp.valid,
        }"
        @blur="form.kpp.blur"
        v-model="form.kpp.value"
        class="form-select"
        aria-label="validationKpp"
      >
        <option v-if="car" :value="car?.kpp">
          {{ car?.kpp }}
        </option>
        <option v-for="item in kpp" :key="item.id" :value="item.name">
          {{ item.name }}
        </option>
      </select>
      <small class="invalid-feedback" v-if="form.kpp.errors.required">
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.kpp.valid"> Looks good! </small>
    </div>
    <div class="col-4">
      <label for="validationYear" class="form-label"><b>Year:</b></label>
      <input
        type="text"
        class="form-control"
        id="validationYear"
        :class="{
          'is-invalid': !form.year.valid && form.year.touched,
          'is-valid': form.year.valid,
        }"
        @blur="form.year.blur"
        v-model="form.year.value"
      />
      <small class="text-muted"
        >min {{ formValidParams.year.minLength }} /
        {{ form.year.value.length }} / max
        {{ formValidParams.year.maxLength }}</small
      >
      <small class="invalid-feedback" v-if="form.year.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.year.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="invalid-feedback" v-if="form.year.errors.required">
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.year.valid"> Looks good! </small>
    </div>
    <div class="col-4">
      <label for="validationRegisterNumber" class="form-label"
        ><b>Register Number:</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationRegisterNumber"
        :class="{
          'is-invalid':
            !form.register_number.valid && form.register_number.touched,
          'is-valid': form.register_number.valid,
        }"
        @blur="form.register_number.blur"
        v-model="form.register_number.value"
      />
      <small class="text-muted"
        >min {{ formValidParams.register_number.minLength }} /
        {{ form.register_number.value.length }} / max
        {{ formValidParams.register_number.maxLength }}</small
      >
      <small
        class="invalid-feedback"
        v-if="form.register_number.errors.minLength"
      >
        The number of characters is less than the allowed number!
      </small>
      <small
        class="invalid-feedback"
        v-if="form.register_number.errors.maxLength"
      >
        You have exceeded the allowed number of characters!
      </small>
      <small
        class="invalid-feedback"
        v-if="form.register_number.errors.required"
      >
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.register_number.valid">
        Looks good!
      </small>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="col">
          <label for="validationColor" class="form-label"><b>Color:</b></label>
          <input
            type="text"
            class="form-control"
            id="validationColor"
            :class="{
              'is-invalid': !form.color.valid && form.color.touched,
              'is-valid': form.color.valid,
            }"
            @blur="form.color.blur"
            v-model="form.color.value"
          />
          <small class="text-muted"
            >min {{ formValidParams.color.minLength }} /
            {{ form.color.value.length }} / max
            {{ formValidParams.color.maxLength }}</small
          >
          <small class="invalid-feedback" v-if="form.color.errors.minLength">
            The number of characters is less than the allowed number!
          </small>
          <small class="invalid-feedback" v-if="form.color.errors.maxLength">
            You have exceeded the allowed number of characters!
          </small>
          <small class="invalid-feedback" v-if="form.color.errors.required">
            The brand is required!
          </small>
          <small class="valid-feedback" v-if="form.color.valid">
            Looks good!
          </small>
        </div>
        <div
          class="col-4 img-thumbnail"
          :style="{ background: form.color.value }"
        ></div>
      </div>
    </div>
    <div class="col-4">
      <label for="validationRent" class="form-label"
        ><b>Rent (euros/month):</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationRent"
        :class="{
          'is-invalid': !form.rent.valid && form.rent.touched,
          'is-valid': form.rent.valid,
        }"
        @blur="form.rent.blur"
        v-model="form.rent.value"
      />
      <small class="text-muted"
        >min {{ formValidParams.rent.minLength }} /
        {{ form.rent.value.length }} / max
        {{ formValidParams.rent.maxLength }}</small
      >
      <small class="invalid-feedback" v-if="form.rent.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.rent.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="invalid-feedback" v-if="form.rent.errors.required">
        The brand is required!
      </small>
      <small class="valid-feedback" v-if="form.rent.valid"> Looks good! </small>
    </div>
    <div class="col-4">
      <label for="validationFoto" class="form-label"><b>Foto:</b></label>
      <input
        type="file"
        class="form-control"
        ref="file"
        id="validationFoto"
        @change="handleFileUpload()"
      />
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">
        <b>{{ btn }}</b>
      </button>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { computed, inject, onMounted, reactive, ref } from "vue";
import { useForm } from "@/helpers/form";
import { maxLength, minLength, required } from "@/helpers/validation";

export default {
  name: "CarForm",

  setup() {
    const store = useStore();
    const car = inject("car");
    const file = ref(null);

    const title = car ? "Editing Car" : "Creating new car";
    const btn = car ? "Edit Car" : "Create Car";
    const kpp = [
      {
        id: 1,
        name: "automatic",
      },
      {
        id: 1,
        name: "manual",
      },
    ];

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    onMounted(() => {
      file.value.focus();
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
        maxLength: 20,
      },
      color: {
        minLength: 4,
        maxLength: 7,
      },
      kpp: {
        minLength: 4,
        maxLength: 4,
      },
      rent: {
        minLength: 1,
        maxLength: 8,
      },
      foto: {
        minLength: 100000,
        maxLength: 6000000,
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
          required,
        },
      },
      register_number: {
        value: car?.register_number ? car?.register_number : "",
        validators: {
          minLength: minLength(formValidParams.register_number.minLength),
          maxLength: maxLength(formValidParams.register_number.maxLength),
          required,
        },
      },
      color: {
        value: car?.color ? car?.color : "",
        validators: {
          minLength: minLength(formValidParams.color.minLength),
          maxLength: maxLength(formValidParams.color.maxLength),
          required,
        },
      },
      kpp: {
        value: car?.kpp ? car?.kpp : "",
        validators: {
          required,
        },
      },
      rent: {
        value: car?.rent ? car?.rent : "",
        validators: {
          minLength: minLength(formValidParams.rent.minLength),
          maxLength: maxLength(formValidParams.rent.maxLength),
          required,
        },
      },
      foto: {
        value: null,
        validators: {},
      },
    });

    function handleFileUpload() {
      form.foto.value = ref(file.value.files[0]);
    }

    function submit(carId = null) {
      const data = reactive({});
      for (const [key, value] of Object.entries(form)) {
        if (value.value !== "") {
          data[key] = value.value;
        }
      }
      if (Object.keys(data).length !== 0) {
        if (car && carId) {
          console.log(config);
          store.dispatch("updateCar", { carId, data, config });
        } else {
          store.dispatch("createCar", { data, config });
        }
      }
    }

    return {
      car,
      title,
      btn,
      kpp,
      file,
      formValidParams,
      handleFileUpload,
      brands: computed(() => store.getters.getBrands),
      models: computed(() => store.getters.getModels),
      loading: computed(() => store.getters.getLoading),
      form,
      submit,
    };
  },
};
</script>
