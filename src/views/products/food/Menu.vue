<template>
    <v-container fluid>
        <v-row wrap justify="space-between">
            <v-col cols="12" md="3" lg="3">
                <FilterSection />
            </v-col>
            <v-col cols="12" md="9" lg="9">
                <AllProducts />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AllProducts from '@/components/Menu/AllProducts';
import FilterSection from '@/components/Menu/FilterSection';

export default {
    components: {
        AllProducts,
        FilterSection
    }
}
</script>