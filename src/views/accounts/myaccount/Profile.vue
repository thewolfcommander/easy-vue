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
                    <v-avatar size="128">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                </v-row>
                <v-row
                    justify="center"
                    class="mt-3"
                >
                    <h2 class="subtitle-1">Manoj Tyagi</h2>
                </v-row>
                <v-row justify="center">
                    <h2 class="subtitle-1">manojtyagi@gmail.com | +91-7253919169</h2>
                </v-row>
                <v-row
                    justify="center"
                    class="mt-3 mb-4"
                >
                    <v-btn
                        small
                        rounded
                        color="primary"
                    >Edit Profile</v-btn>
                </v-row>
                <v-divider></v-divider>
                <v-row class="mt-5">
                    <UsefulLinks />
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
import NormalNavigation from "@/components/Account/NormalNavigation";
import UsefulLinks from "@/components/Account/Profile/UsefulLinks";
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
        UsefulLinks
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