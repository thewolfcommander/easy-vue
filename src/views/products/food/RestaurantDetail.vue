<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-btn color="grey" rounded outlined @click="$router.go(-1)">Go Back</v-btn>
            </v-row>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">{{ restaurant.name }}</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-row justify="center">
                        <v-img
                            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            height="300"
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
                </v-col>
                <v-col cols="12" md="8" class="text-center">
                    <p class="grey--text">{{ restaurant.city }}, {{ restaurant.state }}, {{ restaurant.country }} - {{ restaurant.pincode }}</p>
                </v-col>
            </v-row>
            <v-row justify="center" v-if="foods !== []">
                <p class="title">Foods Available</p>
            </v-row>
            <v-row wrap v-if="foods !== []" class="mt-5">
                <v-col cols="6" sm="4" md="2" v-for="item in foods" :key="item.id">
                    <FoodCard :item="item" />
                </v-col>
            </v-row>
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
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios'
import FoodCard from '@/components/Common/Mobile/FoodCard'

export default {
    data() {
        return {
            foods: [],
            morePage: false,
            nextLink: null,
        }
    },
    components: {
        FoodCard
    },
    props: ['restaurant'],
    created() {
        this.$store.dispatch('startLoading')
        axios({
            url: `${this.$store.state.apiUrl}products/foods?restaurant=${this.restaurant.id}`,
            method: 'GET',
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
                this.$store.dispatch('stopLoading')
            })
            .catch(err => {
                console.log(err);
                this.$store.dispatch('stopLoading')
            });
    },
     methods: {
        loadMore() {
            this.$store.dispatch('startLoading')
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
                    this.$store.dispatch('stopLoading')
                })
                .catch(err => {
                    console.log(err);
                    this.$store.dispatch('stopLoading')
                });
        }
    }
};
</script>

<style scoped>
</style>