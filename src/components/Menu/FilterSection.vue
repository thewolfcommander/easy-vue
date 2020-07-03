<template>
    <v-container>
        <v-row justify="start">
            <p class=" ml-4 headline primary--text">Narrow your Result</p>
        </v-row>
        <v-divider></v-divider>
        <v-row
            justify="start"
            class="px-2"
        >
            <v-col cols="12">
                <p class="subtitle-2 ml-4 grey lighten-2 pa-2">Sort By</p>
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
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <p class="subtitle-2 ml-4 grey lighten-2 pa-2">Restaurants</p>
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
            </v-col>

            <v-divider></v-divider>
            <v-col cols="12">
                <p class="subtitle-2 ml-4 grey lighten-2 pa-2">Categories</p>
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
            </v-col>

            <v-divider></v-divider>
            <v-col cols="12">
                <p class="subtitle-2 ml-4 grey lighten-2 pa-2">Ratings</p>
                <v-col class="text-start">
                    <v-btn text>
                        <v-rating
                            value="5"
                            color="secondary"
                            small
                            readonly
                        ></v-rating>
                    </v-btn>
                    <v-btn text>
                        <v-rating
                            value="4"
                            color="secondary"
                            small
                            readonly
                        ></v-rating>
                    </v-btn>
                    <v-btn text>
                        <v-rating
                            value="3"
                            color="secondary"
                            small
                            readonly
                        ></v-rating>
                    </v-btn>
                    <v-btn text>
                        <v-rating
                            value="2"
                            color="secondary"
                            small
                            readonly
                        ></v-rating>
                    </v-btn>
                    <v-btn text>
                        <v-rating
                            value="1"
                            color="secondary"
                            small
                            readonly
                        ></v-rating>
                    </v-btn>
                </v-col>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <p class="subtitle-2 ml-4 grey lighten-2 pa-2">Price</p>
                <PriceRangeSlider />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PriceRangeSlider from '@/components/Common/PriceRangeSlider'

export default {
    data() {
        return {
        }
    },
    components: {
        PriceRangeSlider,
    }
}
</script>