<template>
    <v-card
        :loading="loading"
        class="mx-auto my-2"
    >

        <v-row justify="center">
            <nuxt-link
                :to="{path: `/menu/${quantity}`}"
                class="text-decoration-none black--text"
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="160"
                    max-height="90"
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
            </nuxt-link>
        </v-row>

        <v-card-subtitle>
            <nuxt-link
                :to="{path: '/menu/:id', params: {id: 'Hello'}}"
                class="text-decoration-none black--text"
            >Cheese Pizza</nuxt-link>
        </v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0 mt-n5"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="11"
                ></v-rating>
                <div class="grey--text ml-4">4.5</div>
            </v-row>

            <div class="subtitle-1 my-0">
                $ • 199
            </div>

        </v-card-text>

        <v-divider class="mx-4 mt-n4"></v-divider>
        <v-card-actions class="mt-n4">
            <v-btn
                color="primary"
                small
                @click="reserve"
            >
                Add
            </v-btn>

            <v-row justify="space-around mt-4 ml-3 mr-2">
                <v-btn
                    fab
                    x-small
                    color="secondary"
                    @click="quantity--"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                <p class="mt-2">{{ quantity }}</p>
                <v-btn
                    fab
                    x-small
                    color="primary"
                    @click="quantity++"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
        quantity: 1
    }),

    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        }
    }
};
</script>

<style scoped>
.small-card-buttons{
    margin-top: 0px!important;
    margin-bottom: 0px!important;
    padding-top: 0px!important;
    padding-bottom: 0px!important;
}
</style>