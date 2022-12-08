<template>
  <!-- <div :style="{ 'background-image': 'url(../public/static/img/whitebrickscover.png)' }"> -->
  <div :style="image">
    <!-- Product Box -->
    <div class="pb-10">
      <!-- Nav Search-->
      <div class="d-flex">
        <input
          class="form-control"
          type="search"
          placeholder="Search for your houseplants..."
          aria-label="Search for your houseplants..."
          v-model="searchText"
        />
        <!-- <a
              class="nav-link collapsed"
              data-bs-toggle="collapse"
              href="javascript:void(0)"
              data-bs-target="#search-open"
              aria-expanded="false"
            >
              <i class="bi bi-search"></i>
            </a> -->
      </div>
      <div class="plants-index row g-0">
        <div class="col-sm-6 col-lg-3" v-for="plant in plants" v-bind:key="plant.id">
          <div class="product-card-1">
            <div class="product-card-image">
              <div class="product-action">
                <!-- <a v-on:click="createFavorite(plant)" class="btn btn-outline-primary">
              <i class="bi bi-heart"></i>
            </a> -->
                <Popper content="Favorited!">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#px-quick-view"
                    href="javascript:void(0)"
                    v-on:click="createFavorite(plant)"
                    class="btn btn-outline-primary icon-color"
                  >
                    <i class="bi bi-heart-fill"></i>
                    <!-- <i class="bi bi-eye-fill"></i> -->
                  </a>
                </Popper>
              </div>
              <div class="product-media">
                <a href="#">
                  <img class="test" v-bind:src="plant.image_url" v-on:click="showPlant(plant.id)" />
                </a>
              </div>
            </div>
            <div class="product-card-info">
              <div class="product-meta small"></div>

              <h6 class="product-title">
                <a v-on:click="showPlant(plant.id)">{{ plant.name }}</a>
              </h6>

              <div class="product-price">
                <span class="text-primary">
                  <small></small>
                </span>
                <del class="fs-sm text-muted">
                  <small></small>
                </del>
              </div>
            </div>
          </div>
        </div>
        <!-- End Product Box -->
        <!-- <div class="plants-index"> -->
        <!-- <div v-for="plant in plants" v-bind:key="plant.id" v-on:click="showPlant(plant.id)">
        <h2>{{ plant.name }}</h2>
        <img v-bind:src="plant.image_url" v-bind:alt="plant.name" />
        <button v-on:click="createFavorite(plant)">Heart</button> -->
        <!-- <h3>{{ plant.description }}</h3> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Popper from "vue3-popper";
import axios from "axios";
export default {
  components: {
    Popper,
  },
  data: function () {
    return {
      plants: [],
      favoriteParams: {},
      searchText: "",
      // image: { backgroundImage: "url(../public/static/img/whitebrickscover.png)" },
    };
  },
  created: function () {
    this.indexPlants();
  },
  watch: {
    searchText() {
      axios.get(`/plants?search=${this.searchText}`).then((response) => {
        console.log(response.data);
        this.plants = response.data;
      });
    },
  },
  methods: {
    indexPlants: function () {
      axios.get("/plants").then((response) => {
        console.log("plants index", response);
        this.plants = response.data;
      });
    },

    createFavorite: function (plant) {
      var favorite = {
        user_id: localStorage.user_id,
        plant_id: plant.id,
        title: plant.name,
        image_url: plant.image_url,
        description: plant.description,
      };
      console.log(favorite.title);
      console.log(favorite.image_url);
      console.log(favorite.description);

      axios
        .post("/favorites", favorite)
        .then((response) => {
          console.log("favorites create", response);
          // window.alert("Favorited");
          // this.$router.push("/favorites");
        })
        .catch((error) => {
          console.log("favorites create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    showPlant: function (id) {
      this.$router.push(`/plants/${id}`);
    },

    searchPlant: function () {
      // axios
      //   .get(`/plants`, {
      //     search: this.searchText,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     this.plants = response.data;
      //   });
    },
  },
};
</script>

<style>
.icon-color {
  color: rgb(255, 44, 185);
}
.icon-color:hover {
  background-color: rgb(255, 44, 185);
  color: white;
}
.test {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
:root {
  --popper-theme-background-color: rgb(255, 44, 185);
  --popper-theme-background-color-hover: rgb(255, 44, 185);
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 9px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
