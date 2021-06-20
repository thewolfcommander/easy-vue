<template>
  <v-container>
    <v-row justify="center">
      <v-img
        src="https://cdni.iconscout.com/illustration/premium/thumb/connection-lost-2161434-1815076.png"
        max-width="450"
      ></v-img>
    </v-row>
    <v-row justify="center">
      Oops! We are not serviceable at the moment because Restaurants doesn't
      offer night service. Sorry for your inconvenience.
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get(`${process.env.apiUrl}core/status/`)
      .then((response) => {
        if (response.data.status) {
          this.$store.dispatch("unblockSite");
          this.$router.push({ name: "Home" });
        } else {
          this.$store.dispatch("blockSite");
        }
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
