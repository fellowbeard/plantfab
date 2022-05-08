<template>
  <div class="plants-show">
    <h2>{{ plant.title }}</h2>
    <img v-bind:src="plant.image_url" v-bind:alt="plant.title" />
    <h3>{{ plant.description }}</h3>
    <router-link to="/plants">Back</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      plant: {},
    };
  },
  created: function () {
    axios.get("/plants/" + this.$route.params.id).then((response) => {
      console.log("plants show", response);
      this.plant = response.data;
    });
  },
  methods: {},
};
</script>
