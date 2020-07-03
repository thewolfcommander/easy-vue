<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Contact Us</h2>
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
                        <v-row wrap>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    label="Your Full Name"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    outlined
                                    rounded
                                    label="Your Email"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-textarea
                                    outlined
                                    rounded
                                    label="Your Full Name"
                                ></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-row justify="end">
                                    <v-btn
                                        large
                                        class="mr-md-5 mr-lg-5"
                                        @click="sendMessage"
                                        color="primary"
                                        rounded
                                    >Send Query</v-btn>
                                </v-row>
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
            fullName: null,
            email: null,
            message: null,
            snackbar: false,
            snack: {
                text: "Error: All Fields should be entered.",
                color: "secondary"
            }
        };
    },
    methods: {
        sendMessage() {
            if (this.fullName && this.email && this.message) {
                console.log("Submitted COntact Form");
                this.snackbar = false;
            } else {
                this.snackbar = true;
            }
        }
    }
};
</script>

<style scoped>
</style>