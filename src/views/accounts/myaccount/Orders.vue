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
                <v-row justify="center"><h3 class="text-h5 grey--text">My Orders</h3></v-row>
                <v-row justify="center" class="d-none d-md-flex"><OrderFilter class="mt-3" /></v-row>
                <Orders />
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
import NormalNavigation from "@/components/Account/NormalNavigation";
import OrderFilter from "@/components/Account/OrderFilter";
import BottomSheet from "@/components/Account/Mobile/BottomSheet";
import Orders from "@/components/Account/Orders/Orders";

export default {
    data() {
        return {
            sheet: false,
        };
    },
    components: {
        NormalNavigation,
        BottomSheet,
        Orders,
        OrderFilter
    }
};
</script>


<style scoped>
.fab-button {
    position: fixed !important;
    bottom: 70px !important;
    right: 25px !important;
}
</style>