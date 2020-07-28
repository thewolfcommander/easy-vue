<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">My Shopping Cart</h2>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                v-if="authenticated"
            >
                <v-btn
                    color="primary"
                    dark
                    @click="syncCart"
                >
                    <v-icon left>mdi-sync</v-icon>
                    <span>Sync Cart</span>
                </v-btn>
                <v-btn
                    color="grey"
                    @click="tool = !tool"
                    icon
                >
                    <v-icon center>
                        mdi-information
                    </v-icon>
                </v-btn>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
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
                            <v-row
                                wrap
                                v-if="isFoods > 0"
                            >
                                <v-col
                                    cols="12"
                                    v-for="(item, index) in foodCartItems"
                                    :key="index"
                                >
                                    <ItemCard :item="item" />
                                </v-col>
                            </v-row>
                            <v-row
                                wrap
                                v-if="isGroceries > 0"
                            >
                                <v-col
                                    cols="12"
                                    v-for="(item, index) in groceryCartItems"
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
                            <p class="subtitle-1">Oops!! Your cart is empty</p>

                        </v-row>
                        <v-row
                            v-if="cartItems===0"
                            justify="center"
                        >
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                lg="4"
                            >
                                <v-btn
                                    color="primary"
                                    outlined
                                    tile
                                    depressed
                                    class="text-start"
                                    x-large
                                    router
                                    :to="{name: 'Home'}"
                                    width="100%"
                                >Continue Shopping</v-btn>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <TotalPart
                            :authenticated="authenticated"
                            v-if="cartItems!==0"
                        />
                        <PromotionPart
                            :authenticated="authenticated"
                            :syncCart="syncCart"
                            v-if="cartItems!==0"
                        />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog
            v-model="tool"
            width="500"
        >

            <v-card>
                <v-card-title class="headline grey lighten-4 primary--text">
                    Why Sync is important?
                </v-card-title>

                <v-card-text class="mt-4">
                    Sync helps to maintain a balance between the items in your cart and our servers.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="tool = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
import GroceryItemCard from "@/components/Cart/GroceryItemCard";
import TotalPart from "@/components/Cart/TotalPart";
import PromotionPart from "@/components/Cart/PromotionPart";

export default {
    components: {
        ItemCard,
        TotalPart,
        PromotionPart,
        GroceryItemCard,
    },
    data() {
        return {
            tool: false,
            dialog: false,
        };
    },
    computed: {
        isFoods() {
            return JSON.parse(this.$store.getters.getFoodCart).length || 0
        },
        isGroceries() {
            return JSON.parse(this.$store.getters.getGroceryCart).length || 0
        },
        parseFoodCart() {
            return JSON.parse(this.$store.getters.getFoodCart) || []
        },
        foodCartItems() {
            return this.parseFoodCart.map((item) => JSON.parse(item)) || []
        },
        prepareForServerCart() {
            let foods = [];
            this.foodCartItems.forEach((item) => {
                let food = {};
                (food.food = item.food.id), (food.quantity = item.quantity);
                foods.push(food);
            });
            return foods;
        },
        parseGroceryCart() {
            return JSON.parse(this.$store.getters.getGroceryCart) || []
        },
        groceryCartItems() {
            return this.parseGroceryCart.map((item) => JSON.parse(item)) || []
        },
        prepareForServerGroceryCart() {
            let groceries = [];
            this.groceryCartItems.forEach((item) => {
                let grocery = {};
                (grocery.grocery = item.grocery.id),
                    (grocery.quantity = item.quantity);
                groceries.push(grocery);
            });
            return groceries;
        },
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
        cartItems() {
            return this.isFoods + this.isGroceries;
        },
    },
    created() {
        this.dialog = true;
        console.log(this.isFoods);
        console.log(this.isGroceries);
        setTimeout(() => {
            this.dialog = false;
        }, 2000);
    },
    methods: {
        syncCart() {
            this.dialog = true;
            let data = {
                user: this.$store.getters.getUser.id,
                foods: this.prepareForServerCart,
                groceries: this.prepareForServerGroceryCart,
            };
            axios({
                url: `https://easyeats.co.in/api/v1/cart/create/`,
                method: `POST`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
                data: data,
            })
                .then((response) => {
                    console.log(response);
                    this.$store.dispatch(
                        "cartFromServer",
                        JSON.stringify(response.data)
                    );
                    this.dialog = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.dialog = false;
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