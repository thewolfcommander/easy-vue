<template>
    <v-dialog
        v-model="dialog"
        persistent
    >
        <v-card>
            <v-toolbar
                flat
                color="primary"
                dark
            >
                <v-toolbar-title>Filter Food Menu</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <v-icon left>mdi-sort</v-icon>
                    Sort By
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-google-maps</v-icon>
                    Restaurants
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-food</v-icon>
                    Categories
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-star</v-icon>
                    Rating
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-cash-usd</v-icon>
                    Price
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >By Name</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >By Price</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >By Restaurant</v-btn>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Vatika Srinagar</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Zayaka Srinagar</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Retro Rolls</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >The Hill Cafe</v-btn>
                            <v-col class="text-center">
                                <v-btn
                                    text
                                    color="indigo"
                                    class="text-capitalize"
                                >View More</v-btn>
                            </v-col>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Non-Veg</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Pure Veg</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Snacks</v-btn>
                            <v-btn
                                text
                                rounded
                                color="primary"
                                class="text-capitalize"
                            >Hot Beverages</v-btn>
                            <v-col class="text-center">
                                <v-btn
                                    text
                                    color="indigo"
                                    class="text-capitalize"
                                >View More</v-btn>
                            </v-col>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-btn text>
                                <v-rating
                                    value="5"
                                    color="secondary"
                                    x-small
                                    readonly
                                ></v-rating>
                            </v-btn>
                            <v-btn text>
                                <v-rating
                                    value="4"
                                    color="secondary"
                                    x-small
                                    readonly
                                ></v-rating>
                            </v-btn>
                            <v-btn text>
                                <v-rating
                                    value="3"
                                    color="secondary"
                                    x-small
                                    readonly
                                ></v-rating>
                            </v-btn>
                            <v-btn text>
                                <v-rating
                                    value="2"
                                    color="secondary"
                                    x-small
                                    readonly
                                ></v-rating>
                            </v-btn>
                            <v-btn text>
                                <v-rating
                                    value="1"
                                    color="secondary"
                                    x-small
                                    readonly
                                ></v-rating>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <PriceRangeSlider />
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
            <v-card-actions>
                <v-row justify="end">
                    <v-btn
                        @click="dialog=false"
                        color="primary"
                        class="mr-5 mb-5"
                        text
                        rounded
                    >Close</v-btn>
                     <v-btn
                        @click="dialog=false"
                        color="secondary"
                        class="mr-5 mb-5"
                        text
                        rounded
                    >Apply</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

import PriceRangeSlider from '@/components/Common/PriceRangeSlider'
export default {
    props: ["dialog"],
    components: {
        PriceRangeSlider,
    }
};
</script>