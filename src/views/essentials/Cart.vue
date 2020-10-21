<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">My food bucket</h2>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                v-if="false"
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
                <v-col
                    cols="12"
                    v-if="loading"
                    class="text-center"
                >
                    <p class="subtitle-1 grey--text">{{ text }}</p>
                    <v-row justify="center">
                        <v-progress-circular
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    v-if="!loading"
                >
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-card-text v-if="cartItems!==0">
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
                                    v-for="(item, index) in foods"
                                    :key="index"
                                >
                                    <ItemCard
                                        :item="item"
                                        @refreshCart="carting()"
                                    />
                                </v-col>
                            </v-row>
                            <v-row wrap>
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
                            :cost="cost"
                            v-if="cartItems>0"
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
            foods: [],
            groceries: [],
            cost: {
                shipping: 0.0,
                sub_total: 0.0,
                total: 0.0,
                discount: 0.0,
            },
            dialog: false,
            loading: true,
            text: "Wait for a sec, we are loading something awesome...",
            cartItems: 0,
            foodsPresent: false,
            groceriesPresent: false,
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
        prepareForServerCart() {
            let foods = [];
            if (this.foodCartItems.length > 0) {
                this.foodCartItems.forEach((item) => {
                    let food = {};
                    (food.food = item.food.id), (food.quantity = item.quantity);
                    foods.push(food);
                });
            }
            return foods;
        },
        parseGroceryCart() {
            return JSON.parse(this.$store.getters.getGroceryCart) || [];
        },
        groceryCartItems() {
            return this.parseGroceryCart.map((item) => JSON.parse(item)) || [];
        },
        prepareForServerGroceryCart() {
            let groceries = [];
            if (this.groceryCartItems.length > 0) {
                this.groceryCartItems.forEach((item) => {
                    let grocery = {};
                    (grocery.grocery = item.grocery.id),
                        (grocery.quantity = item.quantity);
                    groceries.push(grocery);
                });
            }
            return groceries;
        },
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
        // cartItems() {
        //     return this.isFoods + this.isGroceries;
        // },

        isBlocked() {
            return this.$store.getters.getBlocked;
        },
    },
    created() {
        axios
            .get(`${this.$store.state.apiUrl}core/status/`)
            .then((response) => {
                if (response.data.status) {
                    this.$store.dispatch("unblockSite");
                } else {
                    this.$store.dispatch("blockSite");
                    this.$router.push({ name: "Blocked" });
                }
            })
            .catch((err) => console.log(err.message));
        // var loaded = this.$store.getters.getCartReloaded
        // if (!loaded) {
        //     this.$router.go()
        //     this.$store.dispatch('setCartReloaded')
        // }
        this.syncCart();
        this.loading = false;
    },
    methods: {
        syncCart() {
            this.loading = true;
            axios({
                url: `${this.$store.state.apiUrl}cart/list/?user=${this.$store.getters.getUser.id}&active=true`,
                method: `GET`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
            })
                .then((response) => {
                    response = response.data[0];
                    this.foods = response.foods;
                    this.groceries = response.groceries;
                    this.cartItems =
                        response.foods.length + response.groceries.length;
                    this.cost.shipping = response.shipping;
                    this.cost.discount = 0.0;
                    this.cost.sub_total = response.sub_total;
                    this.cost.total = response.total;
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },
        carting() {
            this.loading = true;
            this.cartItems -= 1;
            this.syncCart();
            this.loading = false;
        },
    },
};
</script>

<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>