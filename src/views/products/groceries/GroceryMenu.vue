<template>
    <v-container fluid>
        <v-row wrap justify="space-between">
            <v-col cols="12" md="3" lg="3">
                <FilterSection />
            </v-col>
            <v-col cols="12" md="9" lg="9">
                <AllGrocery />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AllGrocery from '@/components/Grocery/AllGrocery';
import FilterSection from '@/components/Grocery/FilterSection';

export default {
    components: {
        AllGrocery,
        FilterSection
    }
}
</script>