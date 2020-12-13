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

                <v-card-text style="height: 200px;">
                    <v-row justify="start" class="mx-2 my-5">{{ about_us }}</v-row>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text >
                    <v-row justify="center" class="my-5">
                        <v-btn color="primary" rounded router :to="{name: 'Home'}">Start Eating</v-btn>
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
            about_us: `
        Hi, we are easyeats. We provide you the best food near you in the fastest ever possible time. We define a new symbol of quality and trust with you.
        `,
        page_title: "About Us"
        };
    },
};
</script>