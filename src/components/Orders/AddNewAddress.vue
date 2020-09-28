<template>
    <v-row justify="center">
        <v-dialog
            v-model="show"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Add new address</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    v-model="name"
                                    label="Address name*"
                                    hint="Ex: Home, Office"
                                    persistent-hint
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    v-model="pincode"
                                    label="PINCODE*"
                                    hint="Ex: 246174"
                                    persistent-hint
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    v-model="state"
                                    label="State*"
                                    disabled
                                    hint="Ex: Uttarakhand"
                                    persistent-hint
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="address1"
                                    label="Address Line 1*"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Address Line 2*"
                                    required
                                    v-model="address2"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="City*"
                                    required
                                    v-model="city"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Landmark*"
                                    requiired
                                    v-model="landmark"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Country*"
                                    required
                                    disabled
                                    v-model="country"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Phone Number*"
                                    required
                                    v-model="mobile_number"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Alternate Phone Number"
                                    v-model="alt_mobile"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="show = false"
                    >Close</v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="addAddress()"
                    >Save and Proceed</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="snackbar"
            :timeout="3000"
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
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
export default {
    props: ["show"],
    data() {
        return {
            name: null,
            address1: null,
            address2: null,
            city: "Srinagar Garhwal",
            landmark: null,
            pincode: "246174",
            state: "uttarakhand",
            country: "india",
            mobile_number: null,
            alt_mobile: null,
            snackbar: false,
            text: "",
        };
    },
    methods: {
        addAddress() {
            if (
                this.name &&
                this.address1 &&
                this.city &&
                this.pincode &&
                this.state &&
                this.country &&
                this.mobile_number
            ) {
                this.$store.dispatch("startLoading");
                let data = {
                    name: this.name,
                    address1: this.address1,
                    address2: this.address2,
                    city: this.city,
                    landmark: this.landmark,
                    pincode: this.pincode,
                    state: this.state,
                    country: this.country,
                    mobile_number: this.mobile_number,
                    alt_mobile: this.alt_mobile,
                    user: this.$store.getters.getUser.id,
                };
                // console.log(data);
                axios({
                    url: `${this.$store.state.apiUrl}addresses/addresses/`,
                    method: "POST",
                    headers: {
                        Authorization: `Token ${this.$store.getters.getToken}`,
                    },
                    data: data,
                })
                    .then((response) => {
                        this.$store
                            .dispatch("billingAddressForOrder", response.data.id)
                            .then(() => {
                        this.$store.dispatch("stopLoading");
                                this.$router.push({ name: "CheckoutHome" });
                            })
                            .catch((err) => {
                                console.log(err);
                        this.$store.dispatch("stopLoading");
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                        this.text = err.message;
                        this.snackbar = true;
                        this.$store.dispatch("stopLoading");
                    });
            } else {
                this.text = "Please Enter Required Fields";
                this.snackbar = true;
            }
        },
    },
};
</script>