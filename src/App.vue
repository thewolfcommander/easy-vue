<template>
    <v-app>
        <Navbar />

        <v-row class="mt-5 mb-5 pt-5 pb-5"></v-row>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-row
            v-if="scrollpx>600"
            justify="center"
            class="scroll-up"
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
        <Footer />
    </v-app>
</template>

<script>
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

export default {
    name: "App",

    components: {
        Navbar,
        Footer
    },

    data: () => ({
        scrollpx: 0
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
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
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