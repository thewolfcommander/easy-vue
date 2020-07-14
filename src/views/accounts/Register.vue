<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Register Here</h2>
                </v-col>
            </v-row>
            <v-row justify="center" v-if="!getAuthStatus">
                <v-col
                    cols="12"
                    md="7"
                    lg="6"
                >
                    <v-card
                        flat
                        max-width="600px"
                    >
                        <v-row
                            wrap
                            justify="center"
                        >
                            <v-col
                                cols="12"
                                md="8"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    v-model="username"
                                    label="Your username"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    v-model="fullName"
                                    label="Your Full Name"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    v-model="email"
                                    label="Your Email"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    type="password"
                                    v-model="password"
                                    label="Your Password"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="mt-n5"
                            >
                                <v-row justify="center">
                                    <v-btn
                                        large
                                        @click="sendMessage"
                                        color="primary"
                                        rounded
                                    >Register</v-btn>
                                </v-row>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="text-center"
                            >
                                <p class="caption">Not registered yet? <router-link :to="{name: 'Login'}">Login</router-link>
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-else justify="center">
                <v-col cols="12" class="text-center"><p class="subtitle-2">You are already logged in</p></v-col>
                <v-btn rounded color="primary" router :to="{name: 'Profile'}">Go to Profile</v-btn>
            </v-row>
            <v-snackbar
                v-model="snackbar"
                bottom
                right
                light
            >
                <p class="primary--text">{{ snack.text }}</p>

                <template v-slot:action="{ attrs }">
                    <v-btn
                        :color="snack.color"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: null,
            fullName: null,
            email: null,
            password: null,
            snackbar: false,
            snack: {
                text: "Error: All Fields should be entered.",
                color: "secondary"
            }
        };
    },
    methods: {
        sendMessage() {
            if (this.username && this.email && this.fullName && this.password) {
                let data = {
                    user_id: this.username,
                    password: this.password,
                    full_name: this.fullName,
                    email: this.email
                };
                this.$store
                    .dispatch("registerUser", data)
                    .then(() => {
                        this.snackbar = true;
                        this.snack.text = "Successfully Registered";
                        this.snack.color = "success";
                        let user = {
                            username: this.username,
                            password: this.password
                        };
                        this.$store
                            .dispatch("loginUser", user)
                            .then(() => {
                                this.snackbar = true;
                                this.snack.text = "Successfully Logged In";
                                this.snack.color = "success";
                                this.$router.go(-1);
                            })
                            .catch(err => {
                                this.snackbar = true;
                                this.snack.text = err;
                                console.log(err);
                            });
                    })
                    .catch(err => {
                        this.snackbar = true;
                        this.snack.text = err;
                        console.log(err);
                    });
            } else {
                this.snackbar = true;
            }
        }
    },
    computed: {
        getAuthStatus() {
            return localStorage.getItem('status') || false
        }
    }
};
</script>

<style scoped>
</style>