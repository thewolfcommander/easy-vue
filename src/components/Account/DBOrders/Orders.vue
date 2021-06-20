<template>
  <v-row wrap>
    <v-col cols="6" md="4" lg="4" v-for="(item, index) in orders" :key="index">
      <NormalSmallOrderCard
        :item="item"
        :status="status"
        v-if="status === 'created'"
        @reRender="reload"
      />
      <NormalSmallOrderCardForShip
        :item="item"
        :status="status"
        v-if="status === 'shipped'"
        @reRender="reload"
      />
      <NormalSmallOrderCardForDeliver
        :item="item"
        :status="status"
        v-if="status === 'delivered' || status === 'cancelled'"
        @reRender="reload"
      />
    </v-col>
    <v-col cols="12" v-if="loading" class="text-center">
      <p class="subtitle-1 grey--text">{{ text }}</p>
      <v-row justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import NormalSmallOrderCard from "@/components/Account/DBOrders/NormalSmallOrderCard";
import NormalSmallOrderCardForShip from "@/components/Account/DBOrders/NormalSmallOrderCardForShip";
import NormalSmallOrderCardForDeliver from "@/components/Account/DBOrders/NormalSmallOrderCardForDeliver";

export default {
  data() {
    return {
      orders: [],
      loading: true,
      text: "We are fetching orders. Please wait.",
    };
  },
  props: ["status"],
  components: {
    NormalSmallOrderCard,
    NormalSmallOrderCardForShip,
    NormalSmallOrderCardForDeliver,
  },

  created() {
    this.$store.dispatch("startLoading");
    axios({
      url: `${process.env.VUE_APP_API_URL}orders/all/?status=${this.status}`,
      method: `GET`,
      headers: {
        Authorization: `Token ${this.$store.getters.getToken}`,
      },
    })
      .then((response) => {
        this.orders = response.data;
        this.$store.dispatch("stopLoading");
        this.loading = false;
        this.text = null;
      })
      .catch((err) => {
        this.$store.dispatch("stopLoading");
        console.log(err);
        this.text =
          "Sorry cannot load order right now. Please try again later.";
      });
  },

  methods: {
    reload() {
      this.$store.dispatch("startLoading");
      axios({
        url: `${process.env.VUE_APP_API_URL}orders/all/?status=${this.status}`,
        method: `GET`,
        headers: {
          Authorization: `Token ${this.$store.getters.getToken}`,
        },
      })
        .then((response) => {
          this.orders = response.data;
          this.$store.dispatch("stopLoading");
        })
        .catch((err) => {
          this.$store.dispatch("stopLoading");
          console.log(err);
        });
    },
  },
};
</script>
