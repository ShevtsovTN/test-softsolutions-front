<template>
  <section class="min-vh-100 gradient-form" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-12">
                <div class="card-body p-md-5 mx-md-4">
                  <form
                    class="row g-3 needs-validation"
                    novalidate
                    @submit.prevent="submit"
                  >
                    <div class="col-md-12">
                      <label for="validationEmail" class="form-label"
                        >Email</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="validationEmail"
                        :class="{
                          'is-invalid': !form.email.valid && form.email.touched,
                          'is-valid': form.email.valid,
                        }"
                        @blur="form.email.blur"
                        v-model="form.email.value"
                      />
                      <small class="text-muted"
                        >min {{ formValidParams.email.minLength }} /
                        {{ form.email.value.length }} / max
                        {{ formValidParams.email.maxLength }}</small
                      >
                      <small
                        class="invalid-feedback"
                        v-if="form.email.errors.required"
                      >
                        The field cannot be empty!
                      </small>
                      <small
                        class="invalid-feedback"
                        v-if="form.email.errors.minLength"
                      >
                        The number of characters is less than the allowed
                        number!
                      </small>
                      <small
                        class="invalid-feedback"
                        v-if="form.email.errors.maxLength"
                      >
                        You have exceeded the allowed number of characters!
                      </small>
                      <small
                        class="invalid-feedback"
                        v-if="form.email.errors.email"
                      >
                        Your email is not valid!
                      </small>
                      <small class="valid-feedback" v-if="form.email.valid">
                        Looks good!
                      </small>
                    </div>
                    <div class="col-md-12">
                      <label for="validationPassword" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="validationPassword"
                        :class="{
                          'is-invalid':
                            !form.password.valid && form.password.touched,
                          'is-valid': form.password.valid,
                        }"
                        @blur="form.password.blur"
                        v-model="form.password.value"
                      />
                      <small class="text-muted"
                        >min {{ formValidParams.email.minLength }} /
                        {{ form.password.value.length }} / max
                        {{ formValidParams.email.maxLength }}</small
                      >
                      <small
                        class="invalid-feedback"
                        v-if="form.password.errors.required"
                      >
                        The field cannot be empty!
                      </small>
                      <small
                        class="invalid-feedback"
                        v-if="form.password.errors.minLength"
                      >
                        The number of characters is less than the allowed
                        number!
                      </small>
                      <small
                        class="invalid-feedback"
                        v-if="form.password.errors.maxLength"
                      >
                        You have exceeded the allowed number of characters!
                      </small>
                      <small class="valid-feedback" v-if="form.password.valid">
                        Looks good!
                      </small>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary"
                        type="submit"
                        :disabled="!form.valid"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { useForm } from "@/helpers/form";
import { email, maxLength, minLength } from "@/helpers/validation";
import { reactive } from "vue";

export default {
  name: "LoginPage",

  setup() {
    const store = useStore();
    const formValidParams = {
      email: {
        minLength: 5,
        maxLength: 50,
      },
      password: {
        minLength: 8,
        maxLength: 50,
      },
    };

    const form = useForm({
      email: {
        value: "",
        validators: {
          minLength: minLength(5),
          maxLength: maxLength(50),
          email,
        },
      },
      password: {
        value: "",
        validators: { minLength: minLength(8) },
      },
    });

    function submit() {
      const data = reactive({});
      for (const [key, value] of Object.entries(form)) {
        if (value.value !== "") {
          data[key] = value.value;
        }
      }
      if (Object.keys(data).length !== 0) {
        store.dispatch("login", data);
      }
    }

    return {
      formValidParams,
      form,
      submit,
    };
  },
};
</script>
