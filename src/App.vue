<template>
  <!-- Header -->
  <div class="header-height-bar"></div>
  <header class="header-main bg-white header-light fixed-top header-height">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <img src="/static/img/plantfablogosmall.jpg" title="" alt="" />
        </a>
        <!-- Logo -->

        <div class="nav flex-nowrap align-items-center header-right">
          <!-- Nav Search-->
          <div class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-toggle="collapse"
              href="javascript:void(0)"
              data-bs-target="#search-open"
              aria-expanded="false"
            >
              <i class="bi bi-search"></i>
            </a>
          </div>
          <!-- Acount -->
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
              <a class="dropdown-item" href="/login">Login</a>
              <a class="dropdown-item" href="/signup">Sign Up</a>
              <a class="dropdown-item" href="/favorites">Favorites</a>
            </div>
          </div>
          <!-- Wishlist -->
          <div class="nav-item d-none d-xl-block">
            <a class="nav-link" href="#">
              <i class="bi bi-heart"></i>
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
          <button
            class="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- End Mobile Toggle -->
        </div>
      </div>
    </nav>
  </header>
  <!-- Header End -->

  <router-view />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
