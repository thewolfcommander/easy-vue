<template>
    <v-container fluid>

        <v-row
            wrap
            justify="center"
        >
            <v-card
                class="pa-4"
                flat
            >
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Cart'}"
                >Cart</v-btn>
                <v-btn
                    depressed
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Addresses'}"
                >Address</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'CheckoutHome'}"
                    disabled
                >Confirm</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    disabled
                    router
                    :to="{name: 'OrderSuccess'}"
                >Created</v-btn>
            </v-card>
        </v-row>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Select an Address</h2>
                </v-col>
            </v-row>

            <v-row wrap>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    lg="3"
                    v-for="address in addresses"
                    :key="address.id"
                >
                    <AddressCard :address="address" />
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    lg="3"
                >
                   <v-btn large color="grey lighten-4" tile light @click="show = !show">Add new Address</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
            class="pt-4 pb-3"
        >
            <v-card
                color="white"
                dark
            >
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
        <AddNewAddress :show="show" />
    </v-container>
</template>

<script>
import axios from "axios";
import AddressCard from "@/components/Orders/AddressCard";
import AddNewAddress from "@/components/Orders/AddNewAddress";

export default {
    components: {
        AddressCard,
        AddNewAddress
    },
    data() {
        return {
            addresses: [],
            dialog: false,
            show: false,
        };
    },
    computed: {
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
        getUser() {
            return this.$store.getters.getUser;
        },
    },
    methods: {},
    created() {
        this.dialog = true;
        axios({
            url: `${this.$store.state.apiUrl}addresses/addresses/?user=${this.getUser.id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.$store.getters.getToken}`,
            },
        })
            .then((response) => {
                this.addresses = response.data;
                this.dialog = false;
                console.log(this.addresses);
            })
            .catch((err) => {
                if(err.response && err.response.status === 401) {
                        this.$store.dispatch("refreshToken");
                    }
                console.log(err);
                this.dialog = false;
            });
    },
};
</script>

<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>