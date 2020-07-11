<template>
    <v-row justify="center">
        <v-bottom-sheet
            v-model="sheet"
            persistent
            max-width="450px"
        >
            <v-sheet class="text-center">
                <v-btn
                    class="mt-6"
                    text
                    color="error"
                    @click="sheet = !sheet"
                >close</v-btn>
                <v-card
                    :loading="loading"
                    class="mx-auto"
                    max-width="400"
                >
                    <v-card-title>
                        <h2 class="display-1">{{ item.itemName }}</h2>
                        <v-spacer></v-spacer>
                        <span class="title">${{ item.price}}</span>
                    </v-card-title>

                    <v-card-subtitle class="text-start">
                        <h2 class="text-h6 grey--text">{{ item.restaurantName }} Restaurant</h2>
                    </v-card-subtitle>

                    <v-card-text>
                        Our company takes pride in making handmade brushes.
                        Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                        <span class="subheading">Select type</span>

                        <v-chip-group
                            v-model="selection"
                            active-class="primary--text"
                            mandatory
                        >
                            <v-chip>Extra Soft</v-chip>
                            <v-chip>Soft</v-chip>
                            <v-chip>Medium</v-chip>
                            <v-chip>Hard</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-text>
                        <span class="subheading">Select Quantity</span>
                        <v-row justify="space-around mt-4 ml-1 mr-1">
                            <v-btn
                                fab
                                x-small
                                color="secondary"
                                @click="quantity--"
                            >
                                <v-icon
                                    x-small
                                    center
                                >mdi-minus</v-icon>
                            </v-btn>
                            <p class="mt-n0 title">{{ quantity }}</p>
                            <v-btn
                                fab
                                x-small
                                color="primary"
                                @click="quantity++"
                            >
                                <v-icon
                                    x-small
                                    center
                                >mdi-plus</v-icon>
                            </v-btn>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            class="white--text"
                            color="primary"
                            @click="reserve"
                        >
                            Add to Cart
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-sheet>
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
        </v-bottom-sheet>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        quantity: 1,
        loading: false,
        selection: 1,
        snack: {
            text: null,
            color: null
        },
        snackbar: false
    }),
    props: ["sheet", "item"],
    methods: {
        reserve() {
            this.loading = true;
            if (this.quantity > 0) {
                let data = {
                    id: this.item.itemId,
                    itemName: this.item.itemName,
                    quantity: this.quantity,
                    restaurantName: this.item.restaurantName,
                    rating: this.item.rating,
                    price: this.item.price
                };

                this.$store
                    .dispatch("addToCart", data)
                    .then(() => {
                        this.snack.text = `You have successfully added ${this.item.itemName} in your cart`;
                        this.snack.color = "success";
                        this.snackbar = true;
                        this.loading = false;
                        this.sheet = false
                    })
                    .catch(() => {
                        this.snack.text = "Some Error occured";
                        this.snack.color = "error";
                        this.snackbar = true;
                        this.loading = false;
                        this.sheet = false
                    });
            } else {
                this.snack.text = "Quantity can never be less than 1";
                this.snack.color = "error";
                this.snackbar = true;
                this.loading = false;
            }
        }
    }
};
</script>