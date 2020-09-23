<template>
    <v-container fluid>
        <v-row wrap justify="space-between">
            <v-col cols="12" md="12" lg="12">
                <AllGrocery />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AllGrocery from '@/components/Grocery/Groceries';
// import FilterSection from '@/components/Grocery/FilterSection';

export default {
    components: {
        AllGrocery,
        // FilterSection
    }
}
</script>