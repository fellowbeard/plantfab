<template>
  <div class="plants-show">
    <div class="py-4 py-md-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 my-3">
            <article>
              <div class="mb-5">
                <img class="img-fluid max-height" v-bind:src="plant.image_url" v-bind:alt="plant.title" />
              </div>
              <div>
                <a class="h5" href="/">{{ plant.name }}</a>
                <p class="pt-3">
                  <a v-on:click="createFavorite(plant)" class="btn">
                    <i class="bi bi-heart fa-2x"></i>
                  </a>
                </p>

                <p class="pt-3">{{ plant.description }}</p>
                <a class="ms-auto font-w-600" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-return-left"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </a>
              </div>

              <div class="row g-3">
                <div class="col-sm-4"></div>
                <div class="col-sm-8"></div>
              </div>
            </article>
            <!-- blog -->
            <div class="py-6">
              <div class="container">
                <div class="row">
                  <div class="col-sm-8">
                    <div class="row">
                      <div class="col-xl-6 my-3">
                        <div class="hover-top-in">
                          <div class="mt-n8 mx-3 mx-lg-4 border bg-white p-4 position-fixed">
                            <div class="text-muted mb-3"></div>
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
          </div>
        </div>
      </div>
    </div>
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
<style>
.max-height {
  height: 450px;
}

.btn {
  color: rgb(254, 61, 148);
  border: 1px solid rgb(254, 61, 148);
  border-radius: 80px;
  background: transparent;
  transition: all 0.3s ease 0s;
}

.btn:hover {
  color: rgb(255, 255, 255);
  background: rgb(254, 61, 148);
  border: 1px solid rgb(254, 61, 148);
}
</style>
