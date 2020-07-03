<template>
    <v-card
        :loading="loading"
        rounded="lg"
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="250"
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

        <v-card-title>Cafe Badilico</v-card-title>
        <v-card-subtitle>44 products</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <v-row justify="center">
                <v-btn
                    color="secondary"
                    text
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
    })
};
</script>