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
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Addresses'}"
                >Address</v-btn>
                <v-btn
                    depressed
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'CheckoutHome'}"
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
                    <h2 class="text-h4 grey--text">Review your order</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <p class="title">Billing Details</p>
                </v-col>
                <v-col cols="12">
                    <CheckoutAddressCard />
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <p class="title">Order Details</p>
                </v-col>
                <v-col cols="12">
                    <v-card class="px-md-5 px-lg-5">
                        <v-card-text v-if="cartItems !== 0">
                            <v-row wrap>
                                <v-col
                                    cols="4"
                                    md="6"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Description</p>
                                </v-col>
                                <v-col
                                    cols="3"
                                    md="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Quantity</p>
                                </v-col>
                                <v-col
                                    cols="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Remove</p>
                                </v-col>
                                <v-col
                                    cols="3"
                                    md="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Price</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row wrap>
                                <v-col
                                    cols="12"
                                    v-for="(item, index) in foodCartItems"
                                    :key="index"
                                >
                                    <ItemCard :item="item" />
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-row
                            v-if="cartItems===0"
                            justify="center"
                        >
                            <p class="subtitle-1">Oops! Your cart is empty</p>
                        </v-row>
                        <v-divider></v-divider>
                        <TotalPart :authenticated="authenticated" />
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="end">
                <v-col
                    cols="12"
                    sm="5"
                    md="3"
                    lg="2"
                >
                    <v-col cols="12">
                        <v-btn
                            color="primary"
                            tile
                            depressed
                            class="text-start"
                            x-large
                            @click="createOrder()"
                            width="100%"
                        >Create Order</v-btn>
                    </v-col>
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
    </v-container>
</template>

<script>
import axios from "axios";
import ItemCard from "@/components/Cart/ItemCard";
import TotalPart from "@/components/Cart/TotalPart";
import CheckoutAddressCard from "@/components/Orders/CheckoutAddressCard";

export default {
    components: {
        ItemCard,
        TotalPart,
        CheckoutAddressCard,
    },
    data() {
        return {
            tool: false,
            dialog: false,
        };
    },
    computed: {
        parseFoodCart() {
            return JSON.parse(this.$store.getters.getFoodCart);
        },
        foodCartItems() {
            return this.parseFoodCart.map((item) => JSON.parse(item));
        },
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
        cartItems() {
            return this.$store.getters.getCartItems;
        },
    },
    created() {
        this.dialog = true;
        setTimeout(() => {
            this.dialog = false;
        }, 1500);
    },
    methods: {
        createOrder() {
            this.dialog = true;
            let data = {
                user: this.$store.getters.getUser.id,
                cart: this.$store.getters.getCartFromServer.id,
                address: this.$store.getters.getAddressForCurrentOrder,
                active: true,
            };
            axios({
                url: `https://easyeats.co.in/api/v1/orders/create/`,
                method: `POST`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
                data: data,
            })
                .then((response) => {
                    this.$store
                        .dispatch("clearCart")
                        .then(() => {
                            localStorage.setItem('recentOrder', JSON.stringify(response.data))
                            this.dialog = false;
                            this.$router.push({ name: "OrderSuccess" });
                        })
                        .catch(() => {
                            this.dialog = false;
                            this.$router.push({ name: "OrderFailed" });
                        });
                })
                .catch(() => {
                    this.dialog = false;
                    this.$router.push({ name: "OrderFailed" });
                });
        },
    },
};
</script>

<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>