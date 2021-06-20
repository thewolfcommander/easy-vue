<template>
  <v-card class="mx-auto" light>
    <v-card-title>
      <v-icon left>
        mdi-cellphone
      </v-icon>
      <span class="subtitle-1 font-weight-bold">{{
        `Phone - ${address.mobile_number}` || "Home"
      }}</span>
    </v-card-title>

    <v-card-text class="subtitle-2">
      {{ address.address1 }}, {{ address.address2 }}, {{ address.city }},
      {{ address.state }}, {{ address.country }} - {{ address.pincode }}
    </v-card-text>
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
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    //
    dialog: false,
    address: {
      mobile_number: "loading...",
      address1: "loading...",
      address2: "loading...",
      city: "loading...",
      state: "loading...",
      country: "loading...",
      pincode: "loading...",
    },
  }),

  methods: {},
  created() {
    this.dialog = true;
    axios({
      url: `${process.env.apiUrl}addresses/addresses/${this.$store.getters.getAddressForCurrentOrder}/`,
      method: "GET",
      headers: {
        Authorization: `Token ${this.$store.getters.getToken}`,
      },
    })
      .then((response) => {
        this.address = response.data;
        this.dialog = false;
      })
      .catch((err) => {
        console.log(err);
        this.dialog = false;
      });
  },
};
</script>
