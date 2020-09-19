<template>
    <v-container
        fluid
        class="grey lighten-5"
    >
        <v-container>
            <v-row justify="space-between">
                <v-col cols="12">
                    <v-row
                        justify="start"
                        class="px-1"
                    >
                        <h4 class="text-h4 text-xs-h5 primary--text">Delicious Menu</h4>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <FilterSection class="d-none d-md-flex" @sort-foods-by-name="sortBy('name')" @sort-foods-by-price="sortBy('discount_price')" />
                </v-col>
                <v-col
                    cols="9"
                    class="mt-n5"
                >
                    <v-row
                        wrap
                        class="my-0 py-0"
                    >
                        <v-col
                            cols="6"
                            md="3"
                            lg="3"
                            v-for="(item, index) in foods"
                            :key="index"
                            class=""
                        >
                            <SingleSmallCard :item="item" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-row
                justify="center"
                v-if="morePage"
            >
                <v-btn
                    color="secondary"
                    class="mt-5"
                    depressed
                    @click="loadMore"
                >Load more</v-btn>
            </v-row>
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

    </v-container>
</template>

<script>
import axios from "axios";

import SingleSmallCard from "@/components/Common/Mobile/FoodCard";
import FilterSection from "@/components/Menu/FilterSection";

export default {
    components: {
        SingleSmallCard,
        FilterSection
    },

    data() {
        return {
            foods: JSON.parse(localStorage.getItem("foods")) || [],
            morePage: false,
            nextLink: null,
            dialog: false
        };
    },

    created() {
        this.dialog = true;
        axios({
            url: `${this.$store.state.apiUrl}products/foods/`,
            method: "GET"
        })
            .then(response => {
                this.foods = response.data.results;
                localStorage.setItem("foods", JSON.stringify(response.data));
                console.log(response.data);
                if (response.data.links.next) {
                    this.morePage = true;
                    this.nextLink = response.data.links.next.slice(5);
                } else {
                    (this.morePage = false), (this.nextLink = null);
                }
                this.dialog = false;
            })
            .catch(err => {
                console.log(err);
                this.dialog = false;
            });
    },

    methods: {
        loadMore() {
            this.dialog = true;
            axios({
                url: `https${this.nextLink}`,
                method: "GET"
            })
                .then(response => {
                    response.data.results.forEach(item => {
                        this.foods.push(item);
                    });

                    localStorage.setItem("foods", JSON.stringify(this.foods));
                    console.log(this.foods.length);
                    if (response.data.links.next) {
                        this.morePage = true;
                        this.nextLink = response.data.links.next.slice(5);
                    } else {
                        (this.morePage = false), (this.nextLink = null);
                    }
                    this.dialog = false;
                })
                .catch(err => {
                    console.log(err);
                    this.dialog = false;
                });
        },
        sortBy(prop) {
            this.foods.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
        },
    }
};
</script>