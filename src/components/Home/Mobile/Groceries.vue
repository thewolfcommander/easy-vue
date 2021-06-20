<template>
  <v-container fluid class="grey lighten-5">
    <v-container fluid class="py-5">
      <v-row wrap class="mx-0 px-0">
        <v-col cols="9">
          <v-row justify="start" class="px-1">
            <h4 class="text-h6 ml-4 primary--text">Daily Households</h4>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row justify="end">
            <v-btn
              text
              small
              router
              :to="{ name: 'GroceryMenu' }"
              rounded
              color="primary"
              class="mt-1"
              >Explore all</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-n5">
          <v-row wrap class="my-0 py-0">
            <v-col
              cols="6"
              md="4"
              lg="3"
              v-for="(item, index) in items.slice(0, 8)"
              :key="index"
              class="my-n5"
            >
              <GroceryCard :item="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import GroceryCard from "@/components/Common/Mobile/GroceryCard";

export default {
  components: {
    GroceryCard,
  },
  data() {
    return {
      items: JSON.parse(localStorage.getItem("groceries")) || [],
    };
  },

  created() {
    axios({
      url: `${process.env.apiUrl}grocery/items/`,
      method: "GET",
    })
      .then((response) => {
        this.items = response.data.results;
        localStorage.setItem(
          "groceries",
          JSON.stringify(response.data.results)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
