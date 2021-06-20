<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 grey--text">Food Categories</h2>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-none d-md-flex">
        <v-col cols="12">
          <v-card flat class="px-md-5 px-lg-5">
            <v-row wrap>
              <v-col
                cols="6"
                md="3"
                lg="3"
                v-for="(item, index) in categories"
                :key="index"
              >
                <CategoryCard :item="item" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-flex d-md-none">
        <v-col cols="12">
          <v-card flat class="px-md-5 px-lg-5">
            <v-row wrap>
              <v-col
                cols="6"
                md="3"
                lg="3"
                v-for="(item, index) in categories"
                :key="index"
              >
                <MobileCategoryCard :item="item" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center" v-if="morePage">
        <v-btn color="secondary" class="mt-5" depressed @click="loadMore"
          >Load more</v-btn
        >
      </v-row>
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
        class="pt-4 pb-3"
      >
        <v-card color="white" dark>
          <v-card-text>
            <span class="subtitle-2 primary--text">
              Loading...
            </span>
            <v-progress-linear
              indeterminate
              color="primary"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

import CategoryCard from "@/components/Common/CategoryCard";
import MobileCategoryCard from "@/components/Common/Mobile/SmallFoodCategoryCard";

export default {
  components: {
    CategoryCard,
    MobileCategoryCard,
  },

  data() {
    return {
      categories: JSON.parse(localStorage.getItem("categories")) || [],
      dialog: false,
    };
  },
  created() {
    this.dialog = true;
    axios({
      url: `${process.env.apiUrl}products/categories/?active=True`,
      method: "GET",
    })
      .then((response) => {
        this.categories = response.data.results;
        localStorage.setItem("categories", JSON.stringify(response.data));
        console.log(response.data);
        if (response.data.links.next) {
          this.morePage = true;
          this.nextLink = response.data.links.next.slice(4);
        } else {
          (this.morePage = false), (this.nextLink = null);
        }
        this.dialog = false;
      })
      .catch((err) => {
        console.log(err);
        this.dialog = false;
      });
  },
  methods: {
    loadMore() {
      this.dialog = true;
      axios({
        url: `https${this.nextLink}`,
        method: "GET",
      })
        .then((response) => {
          response.data.results.forEach((item) => {
            this.categories.push(item);
          });

          localStorage.setItem("categories", JSON.stringify(this.categories));
          console.log(this.categories.length);
          if (response.data.links.next) {
            this.morePage = true;
            this.nextLink = response.data.links.next.slice(4);
          } else {
            (this.morePage = false), (this.nextLink = null);
          }
          this.dialog = false;
        })
        .catch((err) => {
          console.log(err);
          this.dialog = false;
        });
    },
  },
};
</script>

<style scoped></style>
