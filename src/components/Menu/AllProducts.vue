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
                <v-col
                    cols="12"
                    class="mt-n5"
                >
                    <v-row
                        wrap
                        class="my-0 py-0"
                    >
                        <v-col
                            cols="6"
                            md="4"
                            lg="4"
                            v-for="(item, index) in foods"
                            :key="index"
                            class="my-n5"
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

import SingleSmallCard from "@/components/Common/SingleSmallCard";

export default {
    components: {
        SingleSmallCard
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
            url: `https://www.easyeats.co.in/api/v1/products/foods/`,
            method: "GET"
        })
            .then(response => {
                this.foods = response.data.results;
                localStorage.setItem("foods", JSON.stringify(response.data));
                console.log(response.data);
                if (response.data.links.next) {
                    this.morePage = true;
                    this.nextLink = response.data.links.next.slice(4);
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
                        this.nextLink = response.data.links.next.slice(4);
                    } else {
                        (this.morePage = false), (this.nextLink = null);
                    }
                    this.dialog = false;
                })
                .catch(err => {
                    console.log(err);
                    this.dialog = false;
                });
        }
    }
};
</script>