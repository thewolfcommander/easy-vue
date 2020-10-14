<template>
    <div class="main-loader">
        <div class="text-center">
            <v-overlay :value="true" :opacity="0" class="white">
                <v-row
                        justify="center"
                        align="center"
                        class="pt-5"
                    >
                        <v-progress-circular
                            class="mt-5"
                            indeterminate
                            absolute
                            color="primary"
                            size="96"
                        ></v-progress-circular>
                    </v-row>
            </v-overlay>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        cancel() {
            this.$store.dispatch('stopLoading')
        }
    }
}
</script>