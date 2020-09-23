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
                <v-row justify="start">
                    <v-col cols="12" md="6">
                       <ChangePassword />
                    </v-col>
                    <v-col cols="12" md="6">
                        <EditProfile />
                    </v-col>
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
import EditProfile from "@/components/Account/Profile/EditProfile";
import ChangePassword from "@/components/Account/Profile/ChangePassword";
import NormalNavigation from "@/components/Account/NormalNavigation";
import BottomSheet from "@/components/Account/Mobile/BottomSheet";

export default {
    data() {
        return {
            sheet: false,
        };
    },
    components: {
        NormalNavigation,
        BottomSheet,
        ChangePassword,
        EditProfile,
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