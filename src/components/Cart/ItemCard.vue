<template>
  <v-row>
    <v-col cols="4" md="6">
      <v-row wrap>
        <v-col cols="3" class="d-none d-md-flex">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="70"
            max-height="70"
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
        </v-col>
        <v-col cols="12" md="9">
          <p class="subtitle-1">{{ item.food.name }}</p>
          <p class="subtitle-2 mt-n5 grey--text text--lighten-1">
            By {{ item.food.restaurant.name }}
          </p>
        </v-col>

        <template v-if="item.varient_type != 0 || extrasCompute.length > 0">
          <div class="text-center d-flex pa-2">
            <v-chip
              v-if="item.varient_type != 0"
              class="ma-2"
              color="primary"
              text-color="white"
            >
              <v-icon left>
                mdi-label
              </v-icon>
              {{
                item.food.varients.find((v) => v.id === item.varient_type).name
              }}
            </v-chip>
          </div>
          <div
            class="d-flex flex-row flex-wrap flex-shrink-0"
            v-if="extrasCompute.length > 0"
          >
            <div class="" v-for="extra in extrasCompute" :key="extra.id">
              <v-chip class="ma-2" color="secondary" text-color="white">
                {{ extra.name }}
              </v-chip>
            </div>
          </div>
        </template>
      </v-row>
    </v-col>
    <v-col cols="3" md="2">
      <v-row justify="space-around" class="mt-4 ml-1 mr-1" v-if="!loading">
        <v-btn
          icon
          :loading="loading"
          :disabled="loading"
          x-small
          color="primary"
          v-if="item.quantity > 1"
          @click="decreaseQuantity()"
        >
          <v-icon x-small center>mdi-minus</v-icon>
        </v-btn>
        <p class="mt-n0">{{ item.quantity }}</p>
        <v-btn
          icon
          x-small
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="increaseQuantity()"
        >
          <v-icon x-small center>mdi-plus</v-icon>
        </v-btn>
      </v-row>

      <v-row justify="space-around" class="mt-4 ml-1 mr-1" v-if="loading">
      </v-row>
    </v-col>
    <v-col cols="2" class="text-center">
      <v-btn
        icon
        color="primary"
        class="mt-3"
        :loading="loading"
        :disabled="loading"
        large
        @click="removeItem()"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="3" md="2" class="text-center">
      <p class="subtitle-1 black--text mt-4">
        {{ item.food.discount_price }} x {{ item.quantity }} = {{ item.cost }}
      </p>
    </v-col>
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
  </v-row>
</template>
<script>
// import NProgress from 'nprogress'
import axios from "axios";

export default {
  data() {
    return {
      quantity: 1,
      dialog: false,
      loading: false,
      extras: [],
    };
  },
  props: ["item"],
  methods: {
    varient() {},
    increaseQuantity() {
      this.loading = true;
      this.item.quantity = +this.item.quantity;
      if (this.item.quantity < 50) {
        this.item.quantity += 1;
        this.changeQuantity();
      } else {
        this.loading = false;
        console.log("hello");
      }
    },
    decreaseQuantity() {
      this.loading = true;
      this.item.quantity = +this.item.quantity;
      if (this.item.quantity > 0) {
        this.item.quantity -= 1;
        this.changeQuantity();
      } else {
        this.loading = false;
        console.log("hello");
      }
    },
    changeQuantity() {
      this.loading = true;
      if (this.item.quantity > 0) {
        this.$emit("hideOtherCartItems");
        axios({
          url: `${process.env.VUE_APP_API_URL}cart/food-entry/${this.item.id}/update/`,
          method: "PATCH",
          headers: {
            Authorization: `Token ${this.$store.getters.getToken}`,
          },
          data: {
            quantity: this.item.quantity,
            varient_type: 0,
            extras_addon: "[]",
          },
        })
          .then(() => {
            this.$emit("refreshCart");
            this.$emit("enableItems");
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
            this.$emit("enableItems");
            this.loading = false;
          });
      } else {
        this.loading = false;
      }
    },
    removeItem() {
      this.$emit("hideOtherCartItems");
      this.loading = true;
      console.log(this);
      axios({
        url: `${process.env.VUE_APP_API_URL}cart/food-entry/${this.item.id}/update/`,
        method: "DELETE",
        headers: {
          Authorization: `Token ${this.$store.getters.getToken}`,
        },
      })
        .then(() => {
          // console.log(this.$emit)
          this.loading = false;
          this.$emit("enableItems");
          this.$emit("refreshCart");
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.$emit("enableItems");
        });
    },
  },
  computed: {
    itemCost() {
      return this.item.food.price * this.item.quantity;
    },
    extrasCompute() {
      if (this.item.food.extras.length > 0) {
        let parsedExtras = JSON.parse(this.item.extras_addon);
        let finalValue = [];
        parsedExtras.map((addon) => {
          finalValue.push(this.item.food.extras.find((v) => v.id === addon));
        });
        return finalValue;
      } else {
        return [];
      }
    },
  },
  created() {
    console.info(this.item);
  },
};
</script>
