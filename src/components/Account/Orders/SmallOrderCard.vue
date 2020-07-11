<template>
    <v-card
        :loading="loading"
        class="mx-auto my-2"
    >

        <v-row justify="center">
                <v-img
                    src="https://img.icons8.com/pastel-glyph/2x/purchase-order.png"
                    lazy-src="https://img.icons8.com/pastel-glyph/2x/purchase-order.png"
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
            Order Items summary
        </v-card-subtitle>
        <p class="caption grey--text text-center mt-n4">Orde Id ~ $ 199</p>

        <v-card-actions class="mt-n4 text-center">
            <v-row justify="center" wrap>
                <v-btn
                    color="primary"
                    text
                    small
                >
                    View
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    small
                >
                    Handle
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

    methods: {}
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