<template>
    <v-card flat>
        <v-card-text>
            <v-row
                align="center"
                justify="center"
            >
                <v-btn-toggle
                    v-model="toggle_exclusive"
                    rounded
                    color="primary"
                >

                    <v-tooltip
                        v-model="show"
                        bottom
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon color="primary">mdi-calendar</v-icon>
                            </v-btn>
                        </template>
                        <span>Sort by date</span>
                    </v-tooltip>

                    <v-tooltip
                        v-model="show"
                        bottom
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon color="primary">mdi-cash-usd</v-icon>
                            </v-btn>
                        </template>
                        <span>Sort by price</span>
                    </v-tooltip>

                    <v-tooltip
                        v-model="show"
                        bottom
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon color="primary">mdi-alpha</v-icon>
                            </v-btn>
                        </template>
                        <span>Sort by title</span>
                    </v-tooltip>

                    <v-tooltip
                        v-model="show"
                        bottom
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon color="primary">mdi-reload</v-icon>
                            </v-btn>
                        </template>
                        <span>Reset to default</span>
                    </v-tooltip>
                </v-btn-toggle>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            toggle_exclusive: undefined
        };
    }
};
</script>