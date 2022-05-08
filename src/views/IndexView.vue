<template>
  <div class="plants-index">
    <h1>Plants</h1>
    <div v-for="plant in plants" v-bind:key="plant.id" v-on:click="showPlant(plant.id)">
      <h2>{{ plant.name }}</h2>
      <img v-bind:src="plant.image_url" v-bind:alt="plant.name" />
      <button v-on:click="createFavorite(plant)">Heart</button>
      <!-- <h3>{{ plant.description }}</h3> -->
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
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
