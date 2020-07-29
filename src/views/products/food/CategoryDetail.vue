<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">{{ item.name }}</h2>
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
                    
                </v-col>
            </v-row>
            <v-row wrap>
                <v-col cols="6" sm="4" md="2" v-for="(item, index) in foods" :key="index">
                    <FoodCard :item="item" />
                </v-col>
            </v-row>
        </v-container>
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
</template>

<script>
import axios from 'axios'
import FoodCard from '@/components/Common/Mobile/FoodCard'

export default {
    components: {
        FoodCard
    },
    data() {
        return {
            foods: JSON.parse(localStorage.getItem('foods')) || [],
            dialog: false,
        }
    },

    props: ['item'],
    created() {
        this.dialog = true
        setTimeout(() => {
            this.dialog = false
        }, 2000)
    },

    mounted() {
        axios({
            url: `https://www.easyeats.co.in/api/v1/products/foods/?restaurant=${this.item.restaurant.id}`,
            method: 'GET'
        })
        .then(response => {
            this.foods = response.data.results
            localStorage.setItem('foods', JSON.stringify(response.data.results))
        })
        .catch(err => {
            console.log(err)
        })
    }
};
</script>

<style scoped>
</style>