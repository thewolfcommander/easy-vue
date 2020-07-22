<template>
  <v-parallax
    dark
    src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    height="400"
    top
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center mb-n5" cols="12">
        <h1 class="display-1 font-weight-bold mb-4 black--text">Want to join us as Vendor</h1>
        <h4 class="subheading font-weight-medium grey--text">Fill the form below, we will contact you ASAP</h4>
      </v-col>

      <v-col cols="8" sm="8" md="6" lg="6" class="mt-n5">
          <v-text-field
            v-model="email"
            outlined
            color="black"
            label="Email Address"
            required
          ></v-text-field>
         <v-row justify="center">
              <v-btn color="primary" rounded>Ping</v-btn>
         </v-row>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      email: null
    }
  }
}
</script>