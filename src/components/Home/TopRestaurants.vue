<template>
  <v-container fluid class="primary lighten-5">
    <v-container class="py-5">
      <v-row justify="space-between">
        <v-col cols="9">
          <v-row justify="start" class="px-1">
            <h4 class="text-h4 text-xs-h5 primary--text">Restaurants</h4>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row justify="end">
            <v-btn
              text
              rounded
              router
              :to="{ name: 'Restaurants' }"
              color="primary"
              class="mt-1"
              >Explore all</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-n5">
          <v-row wrap>
            <v-col
              cols="6"
              md="4"
              lg="3"
              v-for="(item, index) in items"
              :key="index"
            >
              <RestaurantCard :item="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

import RestaurantCard from "@/components/Common/RestaurantCard";

export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      items: JSON.parse(localStorage.getItem("restaurants")) || [],
    };
  },

  created() {
    axios({
      url: `${process.env.VUE_APP_API_URL}products/restaurants/?active=true`,
      method: "GET",
    })
      .then((response) => {
        this.items = response.data.results;
        localStorage.setItem(
          "restaurants",
          JSON.stringify(response.data.results)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
