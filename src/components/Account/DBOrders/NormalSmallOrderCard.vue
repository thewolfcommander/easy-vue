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
            Order - {{ item.order_id.toUpperCase() }}
        </v-card-subtitle>
        <p class="caption grey--text text-center mt-n4">{{ item.status.toUpperCase() }} ~ Rs. {{ item.total }}</p>

        <v-card-actions class="mt-n4 text-center">
            <v-row
                justify="center"
                wrap
            >
                <v-btn
                    color="primary"
                    text
                    small
                    router
                    :to="{name: 'DBOrderDetail', params: {orderId: item.id}}"
                >
                    View
                </v-btn>
                <v-btn
                    color="secondary"
                    text
                    small
                    @click="shipOrder()"
                >
                    Ship
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    small
                    @click="cancelOrder()"
                >
                    Cancel
                </v-btn>
            </v-row>
        </v-card-actions>
        <v-snackbar
            v-model="snackbar"
            bottom
            color="white"
            left
            multi-line
            :timeout="6000"
        >
            {{ snackText }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    dark
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-card>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        loading: false,
        selection: 1,
        quantity: 1,
        snackText: null,
        snackbar: false,
    }),
    props: ["item", "status"],
    methods: {
        shipOrder() {
            this.$store.dispatch("startLoading");
            axios({
                url: `${this.$store.state.apiUrl}orders/update/${this.item.id}/`,
                method: `PATCH`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
                data: {
                    status: "shipped",
                },
            })
                .then(() => {
                    this.$emit("reRender");
                    this.$store.dispatch("stopLoading");
                    this.snackbar = true;
                    this.snack.text = "New Order Shipped Successfully";
                    console.log("New Order Shipped");
                })
                .catch((err) => {
                    this.$store.dispatch("stopLoading");
                    console.log(err);
                });
        },
        cancelOrder() {
            this.$store.dispatch("startLoading");
            axios({
                url: `${this.$store.state.apiUrl}orders/update/${this.item.id}/`,
                method: `PATCH`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
                data: {
                    status: "cancelled",
                },
            })
                .then(() => {
                    this.$emit("reRender");
                    this.$store.dispatch("stopLoading");
                    this.snackbar = true;
                    this.snack.text = "New Order Cancelled Successfully"
                    console.log("New Order Cancelled");
                })
                .catch((err) => {
                    this.$store.dispatch("stopLoading");
                    console.log(err);
                });
        },
    },
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