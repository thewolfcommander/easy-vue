<template>
    <div class="main-loader">
        <div class="text-center">
            <v-overlay :value="true">
                <v-progress-circular
                    indeterminate
                    absolute
                    size="64"
                ></v-progress-circular>
            </v-overlay>
        </div>
    </div>
</template>
