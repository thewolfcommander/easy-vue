<template>
    <v-card
        rounded="lg"
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                max-height="120"
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

        <v-card-title class="subtitle-1">{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.restaurant.name }}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <v-row justify="center">
                <v-btn
                    color="secondary"
                    text
                    router
                    :to="{name: 'CategoryDetail', params: {categoryId: 'Hello',} }"
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
        selection: 1
    }),

    props: ['item'],
};
</script>