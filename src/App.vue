<template>
  <!-- Header -->
  <div style="min-height: 163px">
    <header class="header-main fixed-top header-height header-image">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="/">
            <img src="/static/img/logotransp1.png" title="" alt="" />
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
            <!-- Wishlist -->
            <div class="nav-item d-none d-xl-block">
              <a class="nav-link" href="/favorites">
                <!-- <i class="bi bi-heart"></i> -->
              </a>
            </div>
            <!-- Cart -->
            <!-- <div class="nav-item">
            <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modalMiniCart" href="javascript:void(0)">
              <span class="" data-cart-items="8">
                <i class="bi bi-cart"></i>
              </span>
            </a>
          </div> -->
            <!-- Mobile Toggle -->
            <!-- <button
            class="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->
            <!-- End Mobile Toggle -->
          </div>
        </div>
      </nav>
    </header>
  </div>
  <!-- Header End -->

  <router-view />

  <!-- Footer -->
  <footer class="header-image fixed-bottom">
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
  </footer>
  <!-- End Footer -->
</template>
<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.header-image {
  background-image: url("../public/static/img/headerimg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
