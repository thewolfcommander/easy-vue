<template>
    <v-app>
        <Navbar class="d-none d-md-flex" />
        <UpperNavigation class="d-flex d-md-none" />

        <v-row class="mt-5 mb-5 pt-5 pb-5"></v-row>
        <v-content>
            <router-view></router-view>
        </v-content>
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
    </v-app>
</template>

<script>
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
        UpperNavigation
    },

    data: () => ({
        scrollpx: 0,
        windowWidth: window.innerWidth
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
                behavior: "smooth"
            });
        }
    },
    created() {
        let foods = localStorage.getItem('foodCart')
        let groceries = localStorage.getItem('groceryCart')

        if (!foods) {
            localStorage.getItem('foodCart', [])
        }
        if (!groceries) {
            localStorage.getItem('groceryCart', [])
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
        }
    }
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