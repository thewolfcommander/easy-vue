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
        <v-dialog
                v-model="dialog"
                hide-overlay
                persistent
                width="300"
                class="pt-4 pb-3"
            >
                <v-card
                    color="white"
                    dark
                >
                    <v-card-text>
                        <span class="subtitle-2 primary--text">
                            Loading...
                        </span>
                        <v-progress-linear
                            indeterminate
                            color="primary"
                            class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
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
            dialog: false,
        };
    },
    created() {
        this.dialog = true;
        setTimeout(() => {
            this.dialog = false
        }, 1000)
    },
    components: {
        NormalNavigation,
        BottomSheet,
        Orders,
        OrderFilter
    },
};
</script>


<style scoped>
.fab-button {
    position: fixed !important;
    bottom: 70px !important;
    right: 25px !important;
}
</style>