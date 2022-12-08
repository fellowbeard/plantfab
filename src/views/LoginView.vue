<template>
  <div class="login">
    <!-- login page -->
    <div class="section">
      <div class="container">
        <div class="justify-content-center row">
          <div class="col-lg-5 col-xxl-4">
            <div class="card">
              <div class="card-header bg-transparent py-3">
                <h3 class="h4 mb-0">Use "test@test.com" for the email, and "password" for the password!</h3>
              </div>
              <div class="card-body">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div class="form-group mb-3">
                    <label for="email_1" class="form-label">
                      Email
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email_1"
                      class="form-control"
                      placeholder="E-mail"
                      v-model="newSessionParams.email"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <div class="row align-items-center">
                      <label class="form-label col" for="exampleInputPassword01">
                        Password
                        <span class="text-danger">*</span>
                      </label>
                      <!-- <span class="col ms-auto small text-end"><a href="#!">Forgot password?</a></span> -->
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword01"
                      placeholder="*********"
                      v-model="newSessionParams.password"
                    />
                  </div>
                  <!-- Checkbox -->
                  <!-- <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example3" checked />
                    <label class="form-check-label" for="form2Example3">Remember me</label>
                  </div> -->
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary w-100">Log in</button>
                  </div>
                </form>
                <!-- <div class="text-center pt-4 pb-5" style="">
                  <span class="px-3 bg-white d-inline-block align-top lh-sm">OR</span>
                  <div class="border-bottom mt-n3"></div>
                </div> -->
                <!-- <div class="row g-2">
                  <div class="col">
                    <button class="btn w-100 btn-dark" type="button">
                      <i class="bi bi-facebook me-2"></i>
                      Facebook
                    </button>
                  </div>
                  <div class="col">
                    <button class="btn w-100 btn-dark" type="button">
                      <i class="bi bi-twitter me-2"></i>
                      Twitter
                    </button>
                  </div>
                </div> -->
                <div class="pt-4 text-center">
                  <span class="text-muted">
                    Don't have an account?
                    <a href="/signup">Signup here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end login -->
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          window.location = "/";
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
