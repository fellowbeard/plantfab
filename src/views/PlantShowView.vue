<template>
  <div class="plants-show">
    <!-- blog -->
    <div class="py-6">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="row">
              <div class="col-xl-6 my-3">
                <div class="hover-top-in">
                  <a href="/">
                    <img
                      class="img-responsive"
                      style="max-height: 450px"
                      v-bind:src="plant.image_url"
                      v-bind:alt="plant.title"
                    />
                  </a>
                  <div class="mt-n8 mx-3 mx-lg-4 border bg-white p-4 position-fixed">
                    <div class="text-muted mb-3">
                      <!-- <i class="bi bi-clock me-2"></i> -->
                      <!-- March 14, 2021 -->
                    </div>
                    <a class="h5">{{ plant.name }}</a>
                    <p class="pt-3">{{ plant.description }}</p>
                    <a class="ms-auto font-w-600 link-effect" href="/">Back to Gallery</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h2>{{ plant.title }}</h2> -->
    <!-- <img v-bind:src="plant.image_url" v-bind:alt="plant.title" /> -->
    <!-- <h3>{{ plant.description }}</h3> -->
    <!-- <router-link to="/">Back</router-link> -->
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
      console.log(this.plant);
    });
  },
  methods: {},
};
</script>
