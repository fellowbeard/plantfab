<template>
  <div class="favorites-new row g-0">
    <div class="col-sm-6 col-lg-3" v-for="favorite in favorites" v-bind:key="favorite.id">
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
              v-on:click="destroyFavorite(favorite)"
              class="btn btn-outline-primary icon-color"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heartbreak-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"
                />
              </svg>
              <!-- <i class="bi bi-eye-fill"></i> -->
            </a>
            <a
              data-bs-toggle="modal"
              data-bs-target="#px-quick-view"
              href="javascript:void(0)"
              v-on:click="sendReminder()"
              class="btn btn-outline-primary"
            >
              <i class="bi bi-alarm-fill"></i>
            </a>
          </div>
          <div class="product-media">
            <a href="#">
              <img
                class="test"
                v-bind:src="favorite.image_url"
                v-bind:alt="favorite.title"
                v-on:click="showPlant(favorite.plant_id)"
              />
            </a>
          </div>
        </div>
        <div class="product-card-info">
          <div class="product-meta small"></div>

          <h6 class="product-title">
            <a href="#">{{ favorite.title }}</a>
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
  </div>
  <!-- <h1>Favorites</h1> -->
  <!-- <div v-for="favorite in favorites" v-bind:key="favorite.id" v-on:click="showPlant(favorite.plant_id)"> -->
  <!-- <h2>{{ favorite.title }}</h2> -->
  <!-- <img v-bind:src="favorite.image_url" v-bind:alt="favorite.title" /> -->
  <!-- <button v-on:click="destroyFavorite(favorite)">UnHeart</button> -->
  <!-- <button v-on:click="sendReminder()">Set Reminder</button> -->
  <!-- <h3>{{ favorite.description }}</h3> -->
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
