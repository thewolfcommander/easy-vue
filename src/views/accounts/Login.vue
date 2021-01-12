<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Login Here</h2>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                v-if="!getAuthStatus"
            >
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
                                    :rules="[rules.required, rules.counter, rules.check ]"
                                    v-model="username"
                                    label="Your mobile number*"
                                    :counter="10"
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
                                    >Login</v-btn>
                                </v-row>
                            </v-col>
                            <v-col
                                cols="12"
                                md="8"
                                class="text-center"
                            >
                                <p class="caption">Already registered? <router-link :to="{name: 'Register'}">Register</router-link>
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row
                v-else
                justify="center"
            >
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <p class="subtitle-2">You are already logged in</p>
                </v-col>
                <v-btn
                    rounded
                    color="primary"
                    router
                    :to="{name: 'Profile'}"
                >Go to Profile</v-btn>
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
            username: "",
            password: null,
            snackbar: false,
            snack: {
                text: "Error: All Fields should be entered.",
                color: "secondary",
            },
            rules: {
                required: (value) => !!value || "Required.",
                counter: (value) =>
                    value.length <= 10 || "Exactly 10 characters",
                username: (value) => {
                    const pattern = /^\d{10}$/;
                    return pattern.test(value) || "Invalid phone number.";
                },
                check: (value) => !isNaN(value) || "Should be only a number",
            },
        };
    },
    methods: {
        sendMessage() {
            if (this.username && this.password) {
                if (this.username.length === 10) {
                    this.$store.dispatch("startLoading");
                    let data = {
                        grant_type : 'password',
                        username: this.username,
                        password: this.password,
                    };
                    this.$store
                        .dispatch("LoginWithToken", data)
                        .then(() => {
                            this.snackbar = true;
                            this.snack.text = "Successfully Logged In";
                            this.snack.color = "success";
                           // this.$router.push({ name: "Home" });
                           document.location.href = '/'
                            this.$store.dispatch("stopLoading");
                        })
                        .catch((err) => {
                            this.snackbar = true;
                            this.snack.text = err;
                            console.log(err);
                            this.$store.dispatch("stopLoading");
                        });
                }
            } else {
                this.snackbar = true;
            }
        },
    },
    computed: {
        getAuthStatus() {
            return localStorage.getItem("status") || false;
        },
    },
};
</script>

<style scoped>
</style>