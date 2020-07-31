<template>
    <div class="main-loader">
        <div class="text-center">
            <v-overlay :value="true">
                <v-card width="150" height="150" light>
                    <v-row justify="center" align="center" class="pt-5">
                        <v-progress-circular
                        class="mt-5"
                    indeterminate
                    absolute
                    color="primary"
                    size="64"
                ></v-progress-circular>
                    </v-row>
                    <v-row justify="center" class="mt-4 primary--text">Loading</v-row>
                </v-card>
            </v-overlay>
        </div>
    </div>
</template>
