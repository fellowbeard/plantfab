<template>
  <!-- Product Box -->
  <div class="pb-10">
    <div class="plants-index row g-0">
      <div class="col-sm-6 col-lg-3" v-for="plant in plants" v-bind:key="plant.id">
        <div class="product-card-1">
          <div class="product-card-image">
            <div class="product-action">
              <!-- <a v-on:click="createFavorite(plant)" class="btn btn-outline-primary">
              <i class="bi bi-heart"></i>
            </a> -->

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
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      plants: [],
      favoriteParams: {},
    };
  },
  created: function () {
    this.indexPlants();
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
        user_id: 1, //switch to user.id
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
</style>
