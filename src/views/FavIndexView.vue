<template>
  <div class="favorites-new">
    <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>{{ favorite.title }}</h2>
      <img v-bind:src="favorite.image_url" v-bind:alt="favorite.title" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
      errors: [],
    };
  },
  created: function () {
    this.indexFavorite();
  },
  methods: {
    indexFavorite: function () {
      axios.get("/favorites").then((response) => {
        console.log(response.data);
        this.favorites = response.data;
      });
    },
  },
};
</script>
