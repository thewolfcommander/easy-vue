<template>
    <v-app>
        <Navbar class="d-none d-md-flex" />
        <UpperNavigation class="d-flex d-md-none" />

        <v-row class="mt-5 mb-5 pt-5 pb-5 d-none d-md-flex"></v-row>
        <div class="mt-5 mb-5 pt-5 pb-5 d-flex d-md-none"></div>
        <v-content v-if="!isNight">
            <router-view></router-view>
        </v-content>
        <v-container v-else>
            <v-row justify="center">
                <v-img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/connection-lost-2161434-1815076.png"
                    max-width="450"
                ></v-img>
            </v-row>
            <v-row justify="center">
                Oops! We are not serviceable at the moment because Restaurants doesn't offer night service. Sorry for your inconvenience.
            </v-row>
        </v-container>
        <v-row class="mt-5 mb-5 pt-5 pb-5 d-flex d-md-none"></v-row>
        <BottomNavigation class="d-flex d-md-none" />
        <Footer class="d-none d-md-flex" />

        <v-row
            v-if="scrollpx>600"
            justify="center"
            class="scroll-up d-none d-md-flex"
        >
            <v-fab-transition>
                <v-btn
                    fab
                    color="primary"
                    @click="ScrollUp"
                >
                    <v-icon
                        color="white"
                        center
                        large
                    >mdi-chevron-up</v-icon>
                </v-btn>
            </v-fab-transition>
        </v-row>
        <PreLoader v-if="this.$store.getters.getOverlay" />
        <VersionUpdate v-if="!this.$store.getters.getAcceptedVersion" />
    </v-app>
</template>

<script>
import PreLoader from "@/components/PreLoader";
import VersionUpdate from "@/components/VersionUpdate";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

import BottomNavigation from "@/components/Common/Mobile/BottomNavigation";
import UpperNavigation from "@/components/Common/Mobile/UpperNavigation";

export default {
    name: "App",

    components: {
        Navbar,
        Footer,
        BottomNavigation,
        UpperNavigation,
        PreLoader,
        VersionUpdate,
    },

    data: () => ({
        scrollpx: 0,
        windowWidth: window.innerWidth,
        //
    }),
    methods: {
        handleScroll() {
            this.scrollpx = window.scrollY;
        },
        ScrollUp() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
    },
    created() {
        let foods = localStorage.getItem("foodCart");
        let groceries = localStorage.getItem("groceryCart");

        if (!foods) {
            localStorage.getItem("foodCart", []);
        }
        if (!groceries) {
            localStorage.getItem("groceryCart", []);
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    computed: {
        loading() {
            return this.$store.getters.loading;
        },
        isNight() {
            var date = new Date();
            return date.getHours() > 22 || date.getHours() < 10;
        },
    },
};
</script>



<style>
.scroll-up {
    position: fixed;
    bottom: 20px;
    right: 40px;
    z-index: 1001;
}
</style>