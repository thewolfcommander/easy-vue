<template>
    <v-card class="mx-auto my-2">

        <v-row justify="center">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                max-height="90"
                contain
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

        <v-card-subtitle class="text-center">
            {{ item.name }}
        </v-card-subtitle>
        <p class="caption grey--text text-center mt-n4">{{ item.city }}</p>
        <v-card-actions class="mt-n4 text-center">
            <v-row justify="center">
                <v-btn
                    color="primary"
                    text
                    router
                    :to="{name: 'RestaurantDetail', params: {restaurantId: item.id}}"
                    small
                >
                    View
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
    props: ["item"]
};
</script>

<style scoped>
.small-card-buttons {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
</style>