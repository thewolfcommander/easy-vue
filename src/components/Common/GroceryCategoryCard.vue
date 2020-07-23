<template>
    <v-card
        rounded="lg"
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <v-img
                :src="item.image"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                max-width="250"
                class="white lighten-2"
                max-height="150"
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

        <v-row justify="center" class="pb-0 pt-0 mt-0 mb-0">
            <v-card-title class="subtitle-1">{{ item.name }}</v-card-title>
        </v-row>
            <v-card-subtitle class="mt-n5">44 products</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <v-row justify="center">
                <v-btn
                    color="secondary"
                    text
                    router
                    :to="{name: 'GroceryCategoryDetail', params: {categoryId: item.id, category: item}}"
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
        selection: 1,
    }),

    props: ["item"],
};
</script>