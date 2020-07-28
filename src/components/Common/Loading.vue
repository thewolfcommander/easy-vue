<template>
    <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
        class="pt-4 pb-3"
    >
        <v-card
            color="white"
            dark
        >
            <v-card-text>
                <span class="subtitle-2 primary--text">
                    Loading...
                </span>
                <v-progress-linear
                    indeterminate
                    color="primary"
                    class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({}),
    props: ['dialog']
};
</script>