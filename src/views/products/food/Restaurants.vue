<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Best Restaurants out there</h2>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                class="d-none d-md-flex"
            >
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col
                                cols="6"
                                md="3"
                                lg="3"
                                v-for="item in restaurants"
                                :key="item.id"
                            >
                                <RestaurantCard :item="item" />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                class="d-flex d-md-none"
            >
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col
                                cols="6"
                                md="3"
                                lg="3"
                                v-for="item in restaurants"
                                :key="item.id"
                            >
                                <MobileRestaurantCard :item="item" />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import axios from "axios";

import MobileRestaurantCard from "@/components/Common/Mobile/SmallRestaurantCard";
import RestaurantCard from "@/components/Common/RestaurantCard";

export default {
    data() {
        return {
            restaurants: []
        };
    },
    components: {
        RestaurantCard,
        MobileRestaurantCard
    },
    created() {
        this.restaurants = JSON.parse(localStorage.getItem('restaurants'))
    },
    mounted() {
        axios({
            url: `https://www.easyeats.co.in/api/v1/products/restaurants/?active`,
            method: "GET"
        })
            .then(response => {
                this.restaurants = response.data.results;
                localStorage.setItem('restaurants', JSON.stringify(response.data.results))
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>

<style scoped>
</style>