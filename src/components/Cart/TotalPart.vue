<template>
    <v-row wrap>
                <v-col cols="12" md="3" sm="6">
            <v-card
                outlined
                class="pa-4"
                tile
            >
                <v-row>
                    <v-col
                        cols="6"
                        class="text-left"
                    >Total</v-col>
                    <v-col
                        cols="6"
                        class="text-right"
                    >Rs. {{ cost.total || 0.00 }}</v-col>
                </v-row>
            </v-card>
        </v-col>

        <!-- <v-col cols="12" md="3" sm="6">
            <v-card
                outlined
                class="pa-4"
                tile
            >
                <v-row>
                    <v-col
                        cols="6"
                        class="text-left"
                    >Discount</v-col>
                    <v-col
                        cols="6"
                        class="text-right"
                    >Rs. 0.00</v-col>
                </v-row>
            </v-card>
        </v-col> -->
                <v-col cols="12" md="3" sm="6">
            <v-card
                outlined
                class="pa-4"
                tile
            >
                <v-row>
                    <v-col
                        cols="6"
                        class="text-left"
                    >Subtotal</v-col>
                    <v-col
                        cols="6"
                        class="text-right"
                    >Rs. {{ cost.sub_total || 0.00 }}</v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="6">
            <v-card
                outlined
                class="pa-4"
                tile
            >
                <v-row>
                    <v-col
                        cols="6"
                        class="text-left"
                    >Delivery</v-col>
                    <v-col
                        cols="6"
                        class="text-right"
                    >Rs. {{ cost.shipping || 0.00 }}</v-col>
                </v-row>
            </v-card>
        </v-col>


    </v-row>
</template>


<script>
export default {
    props: ['authenticated', 'cost'],
    computed: {
    }
}
</script>