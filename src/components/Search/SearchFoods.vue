<template>
    <div>
        <v-card-title>
            <v-col cols="12">
                <v-row justify="center">
                    <v-col
                        cols="12"
                        md="7"
                        class="inline"
                    >
                        <v-text-field
                            v-model="query"
                            outlined
                            placeholder="Enter something to search"
                            solo
                            @keyup.enter="searchFood()"
                            class="inline-field"
                            full-width
                            flat
                        ></v-text-field>
                        <v-btn
                            depressed
                            tile
                            color="primary"
                            @click="searchFood()"
                            class="inline-field-button"
                        >
                            <span>Search</span>
                            <v-icon
                                right
                                class="ml-5"
                            >mdi-magnify</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-card-title>

        <v-row justify="center">
            <p class="caption primary--text">Showing <span class="grey--text">{{ results_count }}</span> results for <span class="grey--text">{{ query }}</span></p>
        </v-row>

        <v-card-text style="min-height: 200px;">
            <v-row
                justify="center"
                v-if="results_count === 0"
            >No foods Available</v-row>
            <v-row
                wrap
                v-else
            >
                <v-col
                    cols="6"
                    sm="3"
                    md="2"
                    lg="2"
                    v-for="item in entries"
                    :key="item.id"
                >
                    <FoodCard :item="item" />
                </v-col>
            </v-row>
            <v-row justify="center" v-if="loading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row justify="center">
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
            </v-row>
        </v-card-actions>
    </div>
</template>


<script>
import axios from "axios";
import FoodCard from "@/components/Common/Mobile/FoodCard";
export default {
    data: () => ({
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        query: null,
        results_count: 0,
        morePage: false,
        nextLink: null,
        loading: false
    }),
    components: {
        FoodCard,
    },
    methods: {
        searchFood() {
            // Items have already been loaded
            this.loading = true
            if (this.query) {
                axios({
                    url: `https://easyeats-api-v1.herokuapp.com/api/v1/products/foods/search/?search=${this.query}`,
                    method: "GET",
                }).then((response) => {
                    console.log(response.data);
                    this.entries = response.data.results;
                    this.results_count = response.data.count;
                    if (response.data.links.next) {
                        this.morePage = true
                        this.nextLink = response.data.links.next.slice(5);
                    }  else {
                        (this.morePage = false), (this.nextLink = null);
                    }
                    this.loading = false
                });
            } else {
                this.loading = false
            }
        },
        loadMore() {
            this.loading = true;
            axios({
                url: `https${this.nextLink}`,
                method: "GET",
            })
                .then((response) => {
                    response.data.results.forEach((item) => {
                        this.entries.push(item);
                    });
                    console.log(this.entries.length);
                    if (response.data.links.next) {
                        this.morePage = true;
                        this.nextLink = response.data.links.next.slice(5);
                    } else {
                        (this.morePage = false), (this.nextLink = null);
                    }
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped>
.inline {
    position: relative;
}
.inline-field {
    height: 50px !important;
    border-radius: 0 !important;
}
.inline-field-button {
    height: 55px !important;
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 0 !important;
}
</style>