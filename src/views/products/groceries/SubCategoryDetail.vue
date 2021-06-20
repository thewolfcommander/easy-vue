<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center">
        <v-btn color="grey" rounded outlined @click="$router.go(-1)"
          >Go Back</v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 grey--text">{{ subcategory.name }}</h2>
        </v-col>
        <v-col cols="12">
          <v-row justify="center">
            <v-img
              :src="
                subcategory.image
                  ? subcategory.image
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
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-card flat class="px-md-5 px-lg-5">
            <v-row wrap>
              <v-col
                cols="6"
                md="2"
                lg="2"
                v-for="(item, index) in items"
                :key="index"
              >
                <SingleGroceryCard :item="item" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import SingleGroceryCard from "@/components/Common/Mobile/GroceryCard";

export default {
  components: {
    SingleGroceryCard,
  },
  data() {
    return {
      subcategory: {
        id: "",
        name: "loading...",
      },
      items: JSON.parse(localStorage.getItem("groceries")) || [],
    };
  },
  created() {
    axios({
      url: `${process.env.apiUrl}grocery/sub-categories/${this.$route.params.subCategoryId}/`,
      method: "GET",
    })
      .then((response) => {
        this.subcategory.name = response.data.name;
        this.subcategory.id = response.data.id;
        this.subcategory.image = response.data.image;
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },

  mounted() {
    axios({
      url: `${process.env.apiUrl}grocery/items/?active=true&sub_category=${this.$route.params.subCategoryId}`,
      method: "GET",
    })
      .then((response) => {
        this.items = response.data.results;
        console.log(response);
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

<style scoped></style>
