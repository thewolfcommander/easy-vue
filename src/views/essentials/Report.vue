<template>
    <v-container
        class=""
        fluid
    >
        <v-card flat>
            <v-toolbar
                color="primary"
                class="back-tool"
                dark
                extended
                height="80"
                tile
                flat
            >
            </v-toolbar>

            <v-card
                class="mx-auto"
                max-width="700"
                tile
                style="margin-top: -64px;"
            >
                <v-toolbar flat>
                    <v-row justify="center">
                        <v-toolbar-title class="grey--text headline">{{ page_title }}</v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-divider></v-divider>

                <v-card-text style="min-height: 200px;">
                    <v-row
                        justify="center"
                        class="mx-2 my-5"
                    >{{ description }}</v-row>
                    <v-row justify="center">
                        <v-col
                            cols="12"
                            md="8"
                            lg="8"
                        >
                            <v-card
                                flat
                                max-width="800px"
                            >
                                <v-row wrap>
                                    <v-col
                                        cols="12"
                                        md="12"
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
                                        md="12"
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
                                        md="12"
                                    >
                                        <v-textarea
                                            outlined
                                            v-model="message"
                                            rounded
                                            label="Your Message"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row justify="end">
                                            <v-btn
                                                large
                                                class="mr-md-5 mr-lg-5 mt-n5"
                                                @click="sendMessage"
                                                color="secondary"
                                                rounded
                                            >Send Query</v-btn>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-snackbar
                        v-model="snackbar"
                        top
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
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text>
                    <v-row
                        justify="center"
                        class="my-5"
                    >
                        <v-btn
                            color="primary"
                            rounded
                            router
                            :to="{name: 'Home'}"
                        >Start Eating</v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            description:
                "If you have any issue related to using the application. Please report it here.",
            page_title: "Report Issue",
            fullName: null,
            email: null,
            message: null,
            snackbar: false,
            snack: {
                text: "Error: All Fields should be entered.",
                color: "secondary",
            },
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
        },
    },
};
</script>