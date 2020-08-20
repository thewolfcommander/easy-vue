<template>
    <v-container>
        <v-row wrap>
            <v-col
                cols="12"
                md="3"
                lg="3"
                sm="12"
                class="d-none d-md-flex"
            >
                <NormalNavigation />
            </v-col>
            <v-col
                cols="12"
                md="9"
                lg="9"
                sm="12"
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
                <v-row justify="center">
                    <h3 class="text-h5 grey--text">Order - {{ order.order_id.toUpperCase() }}</h3>
                </v-row>
                <v-row justify="start" class="mt-5">
                    <v-expansion-panels style="z-index: 1" elevation="8">
                        <OrderInfoExpansionPanels item="Product Details" :info="order.cart" />
                        <OrderAddressInfo item="Delivery Details" :info="order.address" />
                    </v-expansion-panels>
                </v-row>
            </v-col>
        </v-row>
        <v-btn
            color="primary"
            dark
            fab
            class="fab-button d-flex d-md-none"
            @click="sheet = !sheet"
        >
            <v-icon center>mdi-menu</v-icon>
        </v-btn>
        <BottomSheet :sheet="sheet" />
        
    </v-container>
</template>

<script>
import axios from 'axios'
import NormalNavigation from "@/components/Account/NormalNavigation";
import BottomSheet from "@/components/Account/Mobile/BottomSheet";
import OrderInfoExpansionPanels from "@/components/Account/Orders/OrderInfoExpansionPanels";
import OrderAddressInfo from "@/components/Account/Orders/OrderAddressInfo";

export default {
    data() {
        return {
            sheet: false,
            order: {}
        };
    },
    components: {
        BottomSheet,
        NormalNavigation,
        OrderInfoExpansionPanels,
        OrderAddressInfo
    },
    created() {
        this.$store.dispatch("startLoading");
        axios({
            url: `${this.$store.state.apiUrl}orders/detail/${this.$route.params.orderId}/`,
            method: `GET`,
            headers: {
                Authorization: `Token ${this.$store.getters.getToken}`,
            },
        })
            .then((response) => {
        this.$store.dispatch("stopLoading");
                this.order = response.data;
                console.log(this.order)
            })
            .catch((err) => {
        this.$store.dispatch("stopLoading");
                console.log(err);
            });
    },
};
</script>


<style scoped>
.fab-button {
    position: fixed !important;
    bottom: 70px !important;
    z-index: 1000;
    right: 25px !important;
}
</style>