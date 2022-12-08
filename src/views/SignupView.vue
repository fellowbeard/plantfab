<template>
  <div class="signup">
    <!-- signup page -->
    <div class="section">
      <div class="container">
        <div class="justify-content-center row">
          <div class="col-lg-10 col-xxl-6">
            <div class="card">
              <div class="card-header bg-transparent py-3">
                <h3 class="h4 mb-0">No need to sign up... Just click "Login here" to try it out!</h3>
              </div>
              <div class="card-body">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group mb-3">
                        <label for="name_1" class="form-label">
                          Name
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="name_1"
                          class="form-control"
                          placeholder="Name"
                          v-model="newUserParams.name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
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
                          v-model="newUserParams.email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-3">
                        <label class="form-label col" for="exampleInputPassword_01">
                          Password
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword_01"
                          placeholder="*********"
                          v-model="newUserParams.password"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-3">
                        <label class="form-label col" for="exampleInputPassword1">
                          Conform Password
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="*********"
                          v-model="newUserParams.password_confirmation"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example3" checked />
                    <label class="form-check-label" for="form2Example3">By register, I read & accept the terms.</label>
                  </div> -->
                  <div class="form-group row align-items-center">
                    <div class="col">
                      <button type="submit" value="Submit" class="btn btn-primary">Create Account</button>
                    </div>
                    <div class="col-12 col-sm text-sm-end mt-3 mt-sm-0">
                      <span class="text-muted">
                        Have an account?
                        <a href="/login">Login here</a>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end signup -->
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
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
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
