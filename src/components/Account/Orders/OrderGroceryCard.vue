<template>
    <v-card class="mx-auto my-4">

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

        <v-card-subtitle>
            {{ trimmedName }}
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
                    size="9"
                ></v-rating>
                <div class="grey--text ml-1">4.5</div>
            </v-row>

            <div class="subtitle-1 my-0">
                &#8377; <strike class="grey--text caption">{{ item.grocery.gross_price }}</strike> {{ item.grocery.discount_price }}
            </div>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        sheet: false,
        loading: false,
        selection: 1,
        quantity: 1
    }),
    components: {
    },

    props: ["item"],
    computed: {
        trimmedName() {
            if (this.item.grocery.name.length > 18) {
                return `${this.item.grocery.name.slice(0, 18)}...`
            } else {
                return this.item.grocery.name
            }
        }
    }
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