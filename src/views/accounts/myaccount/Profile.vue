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
                            :alt="user.full_name"
                        >
                    </v-avatar>
                </v-row>
                <v-row
                    justify="center"
                    class="mt-3"
                >
                    <h2 class="subtitle-1">{{ user.full_name }}</h2>
                </v-row>
                <v-row justify="center">
                    <h2 class="subtitle-1">{{ user.email }}<span v-if="user.mobile_number"> | {{ user.mobile_number }}</span></h2>
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
import firebase from "firebase/app";
import "firebase/app";
import "firebase/messaging";

import db from "@/firebase/init";

import NormalNavigation from "@/components/Account/NormalNavigation";
import UsefulLinks from "@/components/Account/Profile/UsefulLinks";
import BottomSheet from "@/components/Account/Mobile/BottomSheet";

export default {
    data() {
        return {
            sheet: false,
            user: {},
        };
    },
    components: {
        NormalNavigation,
        BottomSheet,
        UsefulLinks,
    },
    methods: {
        saveNotificationToken(token) {
            const ref = db.collection("notificationTokens");
            const payload = {
                registration_id: token,
                type: "web",
                user: this.user,
            };
            ref.add(payload)
                .then((response) => {
                    console.log("Successfully saved notification token!");
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log("Error: Could not save token");
                    console.log(err);
                });
            // axios
            //     .post(registerNotifTokenURL, payload)
            //     .then((response) => {
            //         console.log("Successfully saved notification token!");
            //         console.log(response.data);
            //     })
            //     .catch((error) => {
            //         console.log("Error: could not save notification token");
            //         if (error.response) {
            //             console.log(error.response.status);
            //             // Most of the time a "this field must be unique" error will be returned,
            //             // meaning that the token already exists in db, which is good.
            //             if (error.response.data.registration_id) {
            //                 for (let err of error.response.data
            //                     .registration_id) {
            //                     console.log(err);
            //                 }
            //             } else {
            //                 console.log("No reason returned by backend");
            //             }
            //             // If the request could not be sent because of a network error for example
            //         } else if (error.request) {
            //             console.log("A network error occurred.");
            //             // For any other kind of error
            //         } else {
            //             console.log(error.message);
            //         }
            //     });
        },
    },
    mounted() {
        // this.user = JSON.parse(localStorage.getItem('user'))
        this.user = this.$store.getters.getUser;

        var config = {
            apiKey: "AIzaSyB-KKKqNXe6Mj3wlewKxiAvpUCtvrRC3oY",
            authDomain: "easyeats-co-in.firebaseapp.com",
            databaseURL: "https://easyeats-co-in.firebaseio.com",
            projectId: "easyeats-co-in",
            storageBucket: "easyeats-co-in.appspot.com",
            messagingSenderId: "732042584479",
            appId: "1:732042584479:web:6412d2759be1f4dc315daa",
            measurementId: "G-KNPLGGSEBN",
        };
        firebase.initializeApp(config);

        const messaging = firebase.messaging();

        messaging.usePublicVapidKey("BCHbPZQtRHWPYkPXE5tNMe1imbgsgpJJkWgtEBgq6hncDrP9kbgRMULA1NoW_1MRuwU7yvFcGEJhzq2CXxnkUts");

        messaging
            .requestPermission()
            .then(() => {
                console.log("Notification permission granted.");
                messaging.getToken().then((token) => {
                    console.log("New token created: ", token);
                    this.saveNotificationToken(token);
                });
            })
            .catch((err) => {
                console.log("Unable to get permission to notify.", err);
            });

        messaging.onTokenRefresh(function () {
            messaging
                .getToken()
                .then(function (newToken) {
                    console.log("Token refreshed: ", newToken);
                    this.saveNotificationToken(newToken);
                })
                .catch(function (err) {
                    console.log("Unable to retrieve refreshed token ", err);
                });
        });
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