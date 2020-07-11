<template>
    <v-row wrap>
        <v-col cols="6" md="4" lg="4" v-for="(item, index) in 9" :key="index">
            <SmallOrderCard />
        </v-col>
    </v-row>
</template>

<script>
import SmallOrderCard from '@/components/Account/Orders/SmallOrderCard'

export default {
    components: {
        SmallOrderCard
    }
}
</script>