<template>
  <v-row justify="center">
    <v-dialog v-model="sheet" hide-overlay fullscreen>
      <v-sheet class="text-center" height="100vh">
        <v-row class="transparent" justify="center" @click="updateSheet()">
          <v-btn depressed fab color="white">
            <v-icon center color="black">mdi-window-close</v-icon>
          </v-btn>
        </v-row>
        <v-sheet :loading="loading" class="mx-auto" max-width="400">
          <v-card-title>
            <h2 class="display-1" @click="tester">{{ item.name }}</h2>
            <v-spacer></v-spacer>

            <span class="title green--text"
              ><strike class="grey--text caption mr-1"
                >&#8377;{{ item.gross_price }}</strike
              >&#8377;{{ computedPrice() }}</span
            >
          </v-card-title>

          <v-card-subtitle class="text-start">
            <h2 class="text-h6 grey--text">
              {{ item.restaurant.name }} Restaurant
            </h2>
          </v-card-subtitle>

          <!-- <v-card-text v-if="true">
                        Our company takes pride in making handmade brushes.
                        Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
                    </v-card-text> -->

          <v-divider class="my-n2"></v-divider>

          <v-card-text v-if="item.varients.length > 0">
            <span class="text">Select Size</span>
            <v-radio-group v-model="itemVarient">
              <v-row>
                <v-col
                  class="mx-n1 my-n4 pt-7"
                  cols="12"
                  v-for="varient in item.varients"
                  :key="varient.id"
                >
                  <v-radio
                    class="my-1"
                    :label="`${varient.name} (₹ ${varient.price})`"
                    :value="varient.id"
                  ></v-radio>
                </v-col>
              </v-row>
            </v-radio-group>
          </v-card-text>

          <v-divider class="my-n2"></v-divider>

          <v-card-text v-if="item.extras.length > 0">
            <span class="text">Add Extras</span>
            <v-row>
              <v-col
                class="mx-n1 my-n4 pt-7"
                cols="12"
                v-for="extra in item.extras"
                :key="extra.id"
              >
                <v-checkbox
                  class="my-n2"
                  :key="extra.id"
                  v-model="extraAddons"
                  :label="`${extra.name} (₹ ${extra.price})`"
                  :value="extra.id"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <span class="subheading">Select Quantity</span>
            <v-row justify="space-around" class="mt-0 ml-1 mr-1">
              <v-btn
                fab
                x-small
                color="secondary"
                @click="quantity > 0 ? quantity-- : quantity"
              >
                <v-icon x-small center>mdi-minus</v-icon>
              </v-btn>
              <p class="mt-n0 title">{{ quantity }}</p>
              <v-btn fab x-small color="primary" @click="quantity++">
                <v-icon x-small center>mdi-plus</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-row>
            <v-col>
              <v-btn
                color="success"
                tile
                fab
                depressed
                bottom
                class="white--text"
                width="100%"
                @click="reserve"
              >
                Add to Cart
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-sheet>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      bottom
      light
      :class="`${snack.color}--text`"
      left
      multi-line
      :timeout="3000"
    >
      {{ snack.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          :color="snack.color"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data: () => ({
    quantity: 1,
    extraAddons: [],
    itemVarient: 0,
    price: 0,
    loading: false,
    selection: 1,
    snack: {
      text: null,
      color: null,
    },
    snackbar: false,
  }),
  props: ["sheet", "item"],
  methods: {
    ...mapActions(["syncCartFromServer"]),
    updateSheet() {
      this.$emit("closeSheet");
    },
    tester() {
      console.log(this.item);
    },
    computedPrice() {
      // `this` points to the vm instance
      if (this.itemVarient === 0 && this.extraAddons.length <= 0) {
        this.price = this.item.discount_price;
        return this.item.discount_price;
      } else {
        let price = 0;
        if (this.itemVarient != 0) {
          price = this.item.varients.filter((varient) => {
            return varient.id === this.itemVarient;
          })[0].price;
        }
        //Calculate extra addons total
        let extraTotal = 0;
        if (this.item.extras.length > 0 && this.extraAddons.length > 0) {
          this.extraAddons.map((addon) => {
            let addon_price = this.item.extras.find(
              (addon_2) => addon === addon_2.id
            ).price;
            if (addon_price) extraTotal += addon_price;
          });
          //   this.item.extras.map((addon)=> {
          //     let addon_id = this.extraAddons.find((addon_2)=>{
          //               return addon_2 === addon.id
          //           });
          //           console.log(addon_id)
          //     extraTotal += this.item.extras.addon_id

          //      })
        }
        if (price === 0) {
          price += parseInt(this.item.discount_price) + extraTotal;
        } else {
          price += extraTotal;
        }
        this.price = price;
        return price;
      }
    },
    reserve() {
      this.loading = true;
      if (this.quantity > 0) {
        // let extra_addon = "[]";
        // if(this.extraAddons.length>0){
        //     extra_addon = this.extraAddons
        // }
        let data = {
          cart: localStorage.getItem("currentCart"),
          food: this.item.id,
          quantity: this.quantity,
          varient_type: this.itemVarient,
          extras_addon: JSON.stringify(this.extraAddons),
        };

        axios({
          url: `${process.env.apiUrl}cart/food-entry/create/`,
          method: "POST",
          headers: {
            Authorization: `Token ${this.$store.getters.getToken}`,
          },
          data: data,
        })
          .then(() => {
            this.snack.color = "success";
            // var cartItem = +localStorage.getItem('cartItems')
            // cartItem += 1
            // localStorage.setItem('cartItems', cartItem)
            this.syncCartFromServer(this.$store.getters);

            this.snackbar = true;
            this.snack.text = `You have successfully added ${this.item.name} in your cart`;
            this.loading = false;
            this.sheet = false;
            console.log("Snac", this.snack);
            console.log(this.snackbar);
          })
          .catch(() => {
            this.snack.color = "error";
            this.snackbar = true;
            this.snack.text = "Some Error occured";
            this.loading = false;
            this.sheet = false;
          });
      } else {
        this.snack.text = "Quantity can never be less than 1";
        this.snack.color = "error";
        this.snackbar = true;
        this.loading = false;
      }
    },
  },
  computed: {
    // a computed getter
  },
};
</script>
