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
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="7"
                    lg="6"
                >
                    <v-card
                        flat
                        max-width="600px"
                    >
                        <v-row wrap justify="center">
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
                                md="8"  class="mt-n5"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    type="password"
                                    v-model="password"
                                    label="Your Password"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="8" class="mt-n5">
                                <v-row justify="center">
                                    <v-btn
                                        large
                                        @click="sendMessage"
                                        color="primary"
                                        rounded
                                    >Login</v-btn>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="8" class="text-center">
                                <p class="caption">Already registered? <router-link :to="{name: 'Register'}">Register</router-link></p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-snackbar v-model="snackbar" bottom right light>
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
            if (this.username && this.password) {
                let data = {
                    username: this.username,
                    password: this.password
                }
                this.$store.dispatch('loginUser', data)
                .then(() => {
                    this.snackbar = true
                    this.snack.text = "Successfully Logged In";
                    this.snack.color = "success"
                    setTimeout(() => {
                        this.snackbar = false
                    }, 3000)
                    this.$router.go('-1');
                })
                .catch(err => {
                    this.snackbar = true
                    this.snack.text = err.message;
                });
            } else {
                this.snackbar = true;
            }
        }
    }
};
</script>

<style scoped>
</style>