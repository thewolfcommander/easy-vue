<template>
    <v-card
        class="mx-auto my-4"
    >

        <v-row justify="center">
            <v-img
                :src="item.image ? item.image : `https://cdn.vuetifyjs.com/images/cards/cooking.png`"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="150"
                max-height="100"
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

        <v-card-subtitle class="mt-n2">{{ trimmedName }}
        </v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0 mt-n5"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="9"
                ></v-rating>
                <div class="grey--text ml-1">4.5</div>
            </v-row>

            <div class="subtitle-1 my-0">
               &#8377; <strike class="grey--text caption">{{ item.gross_price }}</strike> {{ item.discount_price }}
            </div>

        </v-card-text>

        <v-divider class="mx-4 mt-n4"></v-divider>
        <v-card-actions class="text-center">
            <v-row wrap>
                <v-col cols="9">
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
                    </v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn
                        class="ml-n4 mt-n1"
                        icon
                        color="grey"
                        @click="addToWishlist"
                    >
                        <v-icon center>mdi-heart</v-icon>
                    </v-btn>
                </v-col>

            </v-row>
        </v-card-actions>
        <FoodSpecModal
            :sheet="sheet"
            :item="item"
            @closeSheet="sheet = false"
        />

    </v-card>
</template>

<script>
import FoodSpecModal from "@/components/Common/FoodSpecModal";

export default {
    data: () => ({
        sheet: false,
        loading: false,
        selection: 1,
        wishlistColor: "grey",
        snack: {
            text: null,
            color: null
        },
        snackbar: false
    }),
    components: {
        FoodSpecModal
    },
    props: ["item"],

    methods: {
        addToWishlist() {
            var data = {
                id: this.item.itemId,
                name: this.item.name,
                restaurantName: this.item.restaurantName,
                rating: this.item.rating,
                price: this.item.price
            };

            this.$store
                .dispatch("addToWishlist", data)
                .then(() => {
                    this.snack.text = `You have successfully added ${this.item.name} in your wishlist`;
                    this.snack.color = "success";
                    this.snackbar = true;
                    this.wishlistColor = "primary";
                    this.loading = false;
                })
                .catch((err) => {
                      if(err.response && err.response.status === 401) {
                        this.$store.dispatch("refreshToken");
                    }
                    this.snack.text = "Some Error occured";
                    this.snack.color = "error";
                    this.snackbar = true;
                    this.loading = false;
                });
        }
    },


    computed: {
        trimmedName() {
            if (this.item.name.length > 18) {
                return `${this.item.name.slice(0, 18)}...`
            } else {
                return this.item.name
            }
        }
    }
};
</script>

<style scoped>
.small-card-buttons {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
</style>