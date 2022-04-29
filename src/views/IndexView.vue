<script>
import axios from "axios";
export default {
  data: function () {
    return {
      plants: [],
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
  },
};
</script>

<template>
  <div class="plants-index">
    <h1>Plants</h1>
    <div v-for="plant in plants" v-bind:key="plant.id">
      <h2>{{ plant.name }}</h2>
      <img v-bind:src="plant.image_url" v-bind:alt="plant.name" />
      <h3>{{ plant.description }}</h3>
    </div>
  </div>
</template>

<style>
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
