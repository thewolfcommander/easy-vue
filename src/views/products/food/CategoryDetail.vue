<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Category Name</h2>
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
                    <p class="grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti, modi recusandae dolorum exercitationem consequatur! Odio assumenda incidunt dolorum fugit, recusandae nam illum vero consequuntur consectetur temporibus sit expedita rem quos unde saepe, consequatur alias similique suscipit dicta inventore magnam nostrum quas ipsum ipsa? Consequuntur nostrum iste hic vel doloribus?</p>
                </v-col>
            </v-row>
            <v-row wrap>
                <v-col cols="6" sm="4" md="2" v-for="(item, index) in 16" :key="index">
                    <FoodCard />
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import FoodCard from '@/components/Common/Mobile/FoodCard'

export default {
    components: {
        FoodCard
    }
};
</script>

<style scoped>
</style>