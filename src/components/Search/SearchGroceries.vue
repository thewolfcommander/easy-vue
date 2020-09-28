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
                            @keyup.enter="searchGroceries()"
                            class="inline-field"
                            full-width
                            flat
                        ></v-text-field>
                        <v-btn
                            depressed
                            tile
                            color="primary"
                            @click="searchGroceries()"
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
            <v-row justify="center" v-if="results_count === 0">No groceries Available</v-row>
            <v-row wrap v-else>
                <v-col cols="6" sm="3" md="2" lg="2" v-for="item in entries" :key="item.id">
                    <GroceryCard :item="item" />
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>


<script>
import axios from 'axios'
import GroceryCard from '@/components/Common/Mobile/GroceryCard'
export default {
    data: () => ({
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        query: null,
        results_count: 0,
    }),
    components: {
        GroceryCard,
    },
    methods: {
        searchGroceries() {
            // Items have already been loaded
            this.$store.dispatch("startLoading");
            if (this.query) {
                axios({
                    url: `https://easyeats-api-v1.herokuapp.com/api/v1/grocery/items/search/?search=${this.query}`,
                    method: "GET",
                }).then((response) => {
                    console.log(response.data);
                    this.entries = response.data.results;
                    this.results_count = response.data.count;
                    this.$store.dispatch("stopLoading");
                });
            } else {
                this.$store.dispatch("stopLoading");
            }
        },
    }
}
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