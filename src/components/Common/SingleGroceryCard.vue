<template>
    <v-card
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <v-img
                :src="item.image"
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

        <v-card-title class="subtitle-1">{{ trimmedName }}</v-card-title>
        <v-card-subtitle>{{ item.grocery_category.name }}</v-card-subtitle>

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
        <GrocerySpecModal
            :sheet="sheet"
            :item="item"
        />

    </v-card>
</template>

<script>
import GrocerySpecModal from "@/components/Common/GrocerySpecModal";
export default {
    data: () => ({
        loading: false,
        selection: 1,
        sheet: false,
        quantity: 1,
        wishlistColor: "grey",
    }),

    components: {
        GrocerySpecModal
    },
    props: ['item'],

    methods: {
        addToWishlist() {
            var data = {
                id: this.item.id,
                name: this.item.name,
                rating: 4.5,
                price: this.item.discount_price
            };

            console.log(data)

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
            if (this.item.name.length > 24) {
                return `${this.item.name.slice(0, 24)}...`
            } else {
                return this.item.name
            }
        }
    }
};
</script>