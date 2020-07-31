<template>
    <v-container fluid>
        <v-row
            wrap
            justify="space-between"
        >
            <v-col
                cols="12"
                class="d-flex d-md-none my-0 py-0"
            >
                <v-row wrap justify="space-around" class="my-0 py-0" v-if="this.$store.getters.getVersion">
                    <v-col cols="6">
                        <v-btn
                            color="primary"
                            depressed
                            outlined
                            tile
                            block
                        >Clear Filters</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn
                            @click="dialog = !dialog"
                            color="primary"
                            depressed
                            outlined
                            tile
                            block
                        >Apply Filters</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                md="3"
                lg="3"
            >
                <FilterSection class="d-none d-md-flex" />
                <MobileFilterSection
                    class="d-flex d-md-none"
                    :dialog="dialog"
                />
            </v-col>
            <v-col
                cols="12"
                md="9"
                lg="9"
            >
                <AllProducts class="d-none d-md-flex" />
                <MobileAllProducts class="d-flex d-md-none" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AllProducts from "@/components/Menu/AllProducts";
import FilterSection from "@/components/Menu/FilterSection";

import MobileAllProducts from "@/components/Menu/Mobile/AllProducts";
import MobileFilterSection from "@/components/Menu/Mobile/FilterDrawer";

export default {
    components: {
        AllProducts,
        FilterSection,
        MobileAllProducts,
        MobileFilterSection
    },
    data() {
        return {
            dialog: false
        };
    }
};
</script>