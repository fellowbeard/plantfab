<template>
  <div class="favorites-new">
    <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id" v-on:click="showPlant(favorite.plant_id)">
      <h2>{{ favorite.title }}</h2>
      <img v-bind:src="favorite.image_url" v-bind:alt="favorite.title" />
      <button v-on:click="destroyFavorite(favorite)">UnHeart</button>
      <button v-on:click="sendReminder()">Set Reminder</button>
      <h3>{{ favorite.description }}</h3>
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
    showPlant: function (id) {
      this.$router.push(`/plants/${id}`);
    },
    destroyFavorite: function (favorite) {
      axios.delete("/favorites/" + favorite.id).then((response) => {
        console.log("favorite destroyed", response);
        this.$router.push("/favorites");
      });
    },
    sendReminder: function () {
      axios.get("/twilio/sms/").then((response) => {
        console.log("sms sent", response);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
