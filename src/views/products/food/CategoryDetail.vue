<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center">
        <v-btn color="grey" rounded outlined @click="$router.go(-1)"
          >back</v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 grey--text">{{ category.name }}</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-img
              :src="
                category.image
                  ? category.image
                  : `https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
              "
              lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
              aspect-ratio="1"
              class="grey lighten-2"
              height="300"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" class="text-center">
          <p class="grey--text">{{ category.restaurant.name }}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mt-3" justify="center" v-if="foods !== []">
        <p class="title">Available Foods</p>
      </v-row>
      <v-row class="mt-3" justify="center" v-if="foods !== []">
        <v-col cols="12" class="text-center">
          <v-text-field
            solo-inverted
            light
            flat
            v-model="query"
            hide-details
            class="white--text"
            label="Start typing to search"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
          <p class="caption primary--text mt-4 mb-0">
            Showing {{ itemsCount }} items
            <v-btn v-if="morePage" text x-small @click="loadMore()"
              >Load more</v-btn
            >
          </p>
          <p class="caption secondary--text mt-4 mb-0">
            Tip: Click load more if you cannot find your desired item.
          </p>
        </v-col>
      </v-row>
      <v-row wrap v-if="foods !== []" class="mt-5">
        <v-col
          cols="6"
          sm="4"
          md="2"
          v-for="item in itemsSearched"
          :key="item.id"
        >
          <FoodCard :item="item" />
        </v-col>
      </v-row>
      <v-row justify="center" v-if="morePage">
        <v-btn color="secondary" class="mt-5" depressed @click="loadMore"
          >Load more</v-btn
        >
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import FoodCard from "@/components/Common/Mobile/FoodCard";

export default {
  data() {
    return {
      foods: [],
      categories: [],
      morePage: false,
      query: "",
      nextLink: null,
      category: {
        id: this.$route.params.categoryId,
        name: "loading...",
      },
    };
  },
  components: {
    FoodCard,
  },
  created() {
    axios({
      url: `${process.env.VUE_APP_API_URL}products/categories/${this.category.id}/`,
      method: "GET",
    })
      .then((response) => {
        this.category = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    axios({
      url: `${process.env.VUE_APP_API_URL}products/foods?category=${this.category.id}`,
      method: "GET",
    })
      .then((response) => {
        this.foods = response.data.results;
        localStorage.setItem("foods", JSON.stringify(response.data));
        if (response.data.links.next) {
          this.morePage = true;
          this.nextLink = response.data.links.next.slice(5);
        } else {
          (this.morePage = false), (this.nextLink = null);
        }
        this.$store.dispatch("stopLoading");
      })
      .catch((err) => {
        console.log(err);
        this.$store.dispatch("stopLoading");
      });
  },
  methods: {
    loadMore() {
      this.$store.dispatch("startLoading");
      console.log(this.nextLink);
      axios({
        url: `https${this.nextLink}`,
        method: "GET",
      })
        .then((response) => {
          response.data.results.forEach((item) => {
            this.foods.push(item);
          });

          localStorage.setItem("foods", JSON.stringify(this.foods));
          console.log(this.foods.length);
          if (response.data.links.next) {
            this.morePage = true;
            this.nextLink = response.data.links.next.slice(5);
          } else {
            (this.morePage = false), (this.nextLink = null);
          }
          this.$store.dispatch("stopLoading");
        })
        .catch((err) => {
          console.log(err);
          this.$store.dispatch("stopLoading");
        });
    },
  },
  computed: {
    itemsSearched: function() {
      var self = this;
      if (this.query == "") {
        return this.foods;
      }
      return this.foods.filter(function(item) {
        return item.name.toUpperCase().indexOf(self.query.toUpperCase()) >= 0;
      });
    },
    itemsCount() {
      return this.itemsSearched.length;
    },
  },
};
</script>

<style scoped></style>
