<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item two-line v-for="pro in pros" :key="pro.key">
                <v-list-item-content>
                    <v-list-item-title v-text="pro.key"></v-list-item-title>
                    <v-list-item-subtitle v-text="pro.value"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: ["item", "info"],
    data() {
        return {
            pros: [
                {key: "Address Line 1", value: this.info.address1 },
                {key: "Address Line 2", value: this.info.address2 },
                {key: "City", value: this.info.city },
                {key: "State", value: this.info.state },
                {key: "Country", value: this.info.country },
                {key: "Pincode", value: this.info.pincode },
                {key: "Mobile Number", value: this.info.mobile_number },
                {key: "Alternate Mobile", value: this.info.alt_mobile },
            ]
        }
    }
};
</script>