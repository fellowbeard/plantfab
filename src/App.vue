<template>
  <!-- Header -->
  <div style="min-height: 163px">
    <header class="header-main header-height header-image">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="/">
            <img src="/static/img/logotransp1.png" title="" alt="" />
          </a>
          <a class="logo-alt" href="/">
            <img src="/static/img/instructionslogo1.png" title="" alt="" />
          </a>
          <!-- Logo -->

          <div class="nav flex-nowrap align-items-center header-right">
            <!-- Account -->
            <div class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="dropdown_myaccount"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle"></i>
              </a>

              <div class="dropdown-menu dropdown-menu-end mt-2 shadow" aria-labelledby="dropdown_myaccount">
                <!-- <a class="dropdown-item" href="/">PlantFab</a> -->
                <a v-if="!isLoggedIn()" class="dropdown-item" href="/login">Login</a>
                <a v-if="isLoggedIn()" class="dropdown-item" href="/logout">Logout</a>
                <a v-if="!isLoggedIn()" class="dropdown-item" href="/signup">Sign Up</a>
                <a v-if="isLoggedIn()" class="dropdown-item" href="/favorites">Favorites</a>
              </div>
            </div>
            <!-- <div class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="dropdown_myaccount"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bi bi-search"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end mt-2 shadow" aria-labelledby="dropdown_myaccount">
                <div class="d-flex">
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search..."
                    v-model="searchText"
                  />
                </div>
              </div>
            </div> -->
            <!-- Wishlist -->
            <div class="nav-item d-none d-xl-block">
              <a class="nav-link" href="/favorites">
                <!-- <i class="bi bi-heart"></i> -->
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <!-- Header End -->

  <router-view />

  <!-- Footer -->
  <!-- <footer class="header-image fixed-bottom">
    <div class="footer-top py-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4 my-3">
            <div class="nav white-link fs-5"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-2 footer-border-top light small">
      <div class="container">
        <div class="row"></div>
      </div>
    </div>
  </footer> -->
  <!-- End Footer -->
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      plants: [],
      searchText: "",
    };
  },
  created: function () {
    this.indexPlants();
  },
  methods: {
    isLoggedIn() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    indexPlants: function () {
      axios.get("/plants").then((response) => {
        console.log("plants index", response);
        this.plants = response.data;
      });
    },
  },

  watch: {
    searchText() {
      axios.get(`/plants?search=${this.searchText}`).then((response) => {
        console.log(response.data);
        this.plants = response.data;
      });
    },
  },
};
</script>

<style>
.logo-alt {
  max-width: 300px;
  height: auto;
}
.header-image {
  background-image: url("../public/static/img/headerimg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
