<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 grey--text">Grocery Categories</h2>
        <v-card flat class="px-md-5 px-lg-5">
          <v-row wrap>
            <v-col
              cols="6"
              md="3"
              lg="3"
              v-for="(item, index) in items"
              :key="index"
            >
              <GroceryCategoryCard :item="item" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import GroceryCategoryCard from "@/components/Common/Mobile/SmallGroceryCategoryCard";

export default {
  components: {
    GroceryCategoryCard,
  },
  data() {
    return {
      items: JSON.parse(localStorage.getItem("groceryCategories")) || [],
    };
  },

  created() {
    axios({
      url: `${process.env.VUE_APP_API_URL}grocery/categories/?active=true`,
      method: "GET",
    })
      .then((response) => {
        this.items = response.data.results;
        localStorage.setItem(
          "groceryCategories",
          JSON.stringify(response.data.results)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
