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
                                    cols="6"
                                    md="7"
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
                                    cols="3"
                                    md="3"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Price</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row
                                wrap
                            >
                                <v-col
                                    cols="12"
                                    v-for="(item, index) in foods"
                                    :key="index"
                                >
                                    <ItemCard :item="item" />
                                </v-col>
                            </v-row>
                            <v-row
                                wrap
                            >
                                <v-col
                                    cols="12"
                                    v-for="(item, index) in groceries"
                                    :key="index"
                                >
                                    <GroceryItemCard :item="item" />
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
                        <TotalPart :authenticated="authenticated" :cost="cost" />
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
import ItemCard from "@/components/Orders/ItemCard";
import GroceryItemCard from "@/components/Orders/GroceryItemCard";
import TotalPart from "@/components/Cart/TotalPart";
import CheckoutAddressCard from "@/components/Orders/CheckoutAddressCard";

export default {
    components: {
        ItemCard,
        GroceryItemCard,
        TotalPart,
        CheckoutAddressCard,
    },
    data() {
        return {
            tool: false,
            foods: [],
            groceries: [],
            cost: {
                shipping: 0.00,
                sub_total: 0.00,
                total: 0.00,
                discount: 0.00
            },
            dialog: false,
            cartItems: 0,
        };
    },
    computed: {
        isFoods() {
            return JSON.parse(this.$store.getters.getFoodCart).length || 0;
        },
        isGroceries() {
            return JSON.parse(this.$store.getters.getGroceryCart).length || 0;
        },
        parseFoodCart() {
            return JSON.parse(this.$store.getters.getFoodCart) || [];
        },
        foodCartItems() {
            return this.parseFoodCart.map((item) => JSON.parse(item)) || [];
        },
        parseGroceryCart() {
            return JSON.parse(this.$store.getters.getGroceryCart) || [];
        },
        groceryCartItems() {
            return this.parseGroceryCart.map((item) => JSON.parse(item)) || [];
        },
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
    },
    created() {
        this.dialog = true;
        setTimeout(() => {
            this.dialog = false;
        }, 1500);
        this.syncCart()
    },
    methods: {
        createOrder() {
            this.$store.dispatch("startLoading");
            let data = {
                user: this.$store.getters.getUser.id,
                cart: localStorage.getItem('currentCart'),
                address: this.$store.getters.getAddressForCurrentOrder,
                active: true,
            };
            axios({
                url: `${this.$store.state.apiUrl}orders/create/`,
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
                            localStorage.setItem(
                                "recentOrder",
                                JSON.stringify(response.data)
                            );
                            this.$store.dispatch("clearCart");
                            this.$store.dispatch("stopLoading");
                            this.$store.dispatch('createFreshCart', this.$store.getters.getToken);
                            var loaded = this.$store.getters.getCartReloaded
                            if (loaded) {
                                this.$store.dispatch('setCartUnloaded')
                            } else {
                                this.$store.dispatch('setCartReloaded')
                            }
                            this.$router.push({ name: "OrderSuccess" });
                        })
                        .catch((err) => {
                            console.log(err);
                            this.$store.dispatch("stopLoading");
                            this.$router.push({ name: "OrderFailed" });
                        });
                })
                .catch((err) => {
                    console.log(err);
                    this.$store.dispatch("stopLoading");
                    this.$router.push({ name: "OrderFailed" });
                });
        },
        syncCart() {
            this.$store.dispatch("startLoading");
            axios({
                url: `${this.$store.state.apiUrl}cart/detail/${localStorage.getItem('currentCart')}/`,
                method: `GET`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                }
            })
                .then((response) => {
                    console.log(response.data)
                    this.foods = response.data.foods
                    this.groceries = response.data.groceries
                    this.cartItems = response.data.foods.length + response.data.groceries.length
                    this.cost.shipping = response.data.shipping
                    this.cost.discount = 0.00
                    this.cost.sub_total = response.data.sub_total
                    this.cost.total = response.data.total
                    this.$store.dispatch("stopLoading");
                })
                .catch((err) => {
                    console.log(err);
                    this.$store.dispatch("stopLoading");
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