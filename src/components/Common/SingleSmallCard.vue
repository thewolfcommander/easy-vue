<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="250"
                max-height="150"
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-row>

        <v-card-title class="subtitle-1">{{ trimmedName }}
        </v-card-title>
        <v-card-subtitle>{{ item.restaurant.name }} Restraunt</v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
                <div class="grey--text ml-4">4.5</div>
            </v-row>

            <div class="subtitle-1 my-0">
                &#8377; <strike class="grey--text caption">{{ item.gross_price }}</strike> {{ item.discount_price }}
            </div>

        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="text-center">
            <v-row wrap>
                <v-col cols="10">
                    <v-btn
                        color="primary"
                        small
                        depressed
                        block
                        @click="sheet=!sheet"
                    >
                        <v-icon
                            small
                            left
                        >mdi-cart</v-icon>
                        <span class="subtitle-2">Add to cart</span>
                    </v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn
                        class="ml-n4 mt-n1"
                        icon
                        :color="wishlistColor"
                        @click="addToWishlist"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-col>

            </v-row>

        </v-card-actions>

        <FoodSpecModal
            :sheet="sheet"
            :item="item"
        />

        <v-snackbar
            v-model="snackbar"
            bottom
            light
            :class="`${snack.color}--text`"
            left
            multi-line
            :timeout="6000"
        >
            {{ snack.text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    dark
                    text
                    :color="snack.color"
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-card>
</template>

<script>
import FoodSpecModal from "@/components/Common/FoodSpecModal";

export default {
    data() {
        return {
            sheet: false,
            loading: false,
            selection: 1,
            wishlistColor: "grey",
            snack: {
                text: null,
                color: null
            },
            snackbar: false
        };
    },

    props: ["item"],
    components: {
        FoodSpecModal
    },
    methods: {
        addToWishlist() {
            var data = {
                id: this.item.itemId,
                itemName: this.item.itemName,
                restaurantName: this.item.restaurantName,
                rating: this.item.rating,
                price: this.item.price
            };

            this.$store
                .dispatch("addToWishlist", data)
                .then(() => {
                    this.snack.text = `You have successfully added ${this.item.itemName} in your wishlist`;
                    this.snack.color = "success";
                    this.snackbar = true;
                    this.wishlistColor = "primary";
                    this.loading = false;
                })
                .catch(() => {
                    this.snack.text = "Some Error occured";
                    this.snack.color = "error";
                    this.snackbar = true;
                    this.loading = false;
                });
        }
    },

    computed: {
        trimmedName() {
            if (this.item.name.length > 20) {
                return `${this.item.name.slice(0, 20)} ...`
            } else {
                return this.item.name
            }
        }
    }
};
</script>