<template>
    <v-container
        fluid
        v-if="this.$store.getters.getVersion"
        class="grey lighten-5"
    >
        <v-container class="py-5">
            <v-row justify="space-between">
                <v-col cols="9">
                    <v-row justify="start" class="px-1">
                        <h4 class="text-h4 text-xs-h5 grey--text">Categories</h4>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-row justify="end">
                        <v-btn
                            text
                            rounded
                            color="primary"
                            router
                            :to="{name: 'Categories'}"
                            class="mt-1"
                        >Explore all</v-btn>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-n5">
                    <v-row wrap>
                        <v-col cols="6" md="4" lg="3" v-for="(item, index) in exItems" :key="index">
                            <CategoryCard :item="item" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios'

import CategoryCard from '@/components/Common/CategoryCard'

export default {
    components: {
        CategoryCard
    },
    data() {
        return {
            items: JSON.parse(localStorage.getItem('categories')) || [],
        }
    },

    created() {
        axios({
            url: `${this.$store.state.apiUrl}products/categories/?active=true`,
            method: 'GET'
        })
        .then(response => {
            this.items = response.data.results
            localStorage.setItem('categories', JSON.stringify(response.data.results))
        })
        .catch(err => {
            console.log(err)
        })
    },

    computed: {
        exItems() {
            return this.items.slice(0, 4)
        }
    }
}
</script>