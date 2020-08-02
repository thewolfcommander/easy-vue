<template>
    <v-container
        class=""
        fluid
    >
        <v-card flat>
            <v-toolbar
                color="primary"
                class="back-tool"
                dark
                extended
                height="80"
                tile
                flat
            >
            </v-toolbar>

            <v-card
                class="mx-auto"
                max-width="700"
                tile
                style="margin-top: -64px;"
            >
                <v-toolbar flat>
                    <v-row justify="center">
                        <v-toolbar-title class="grey--text title">Search the best foods out there</v-toolbar-title>
                    </v-row>
                </v-toolbar>

                <v-card-title>
                    <v-col cols="12">
                        <v-row justify="center">
                            <v-col
                                cols="12"
                                sm="6"
                                md="8"
                            >
                                <v-text-field
                                    label="Start typing and see results ..."
                                    single-line
                                    v-model="query"
                                    @keyup="search()"
                                    outlined
                                    prepend-inner-icon="mdi-magnify"
                                ></v-text-field>
                                <v-autocomplete
                                    v-model="model"
                                    :items="items"
                                    :loading="isLoading"
                                    :search-input.sync="search"
                                    color="white"
                                    hide-no-data
                                    hide-selected
                                    item-text="Description"
                                    item-value="API"
                                    label="Public APIs"
                                    placeholder="Start typing to Search"
                                    prepend-icon="mdi-database-search"
                                    return-object
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-expand-transition>
                            <v-list
                                v-if="model"
                                class="red lighten-3"
                            >
                                <v-list-item
                                    v-for="(field, i) in fields"
                                    :key="i"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title v-text="field.value"></v-list-item-title>
                                        <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-expand-transition>
                    </v-col>
                </v-card-title>

                <v-row justify="center">
                    <p class="caption primary--text">Showing <span class="grey--text">{{ results_count }}</span> results for <span class="grey--text">{{ query }}</span></p>
                </v-row>

                <v-card-text style="height: 200px;">
                    <v-row justify="center">No foods Available</v-row>
                </v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        descriptionLimit: 60,
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        query: "",
        results_count: 0,
    }),

    computed: {
        fields() {
            if (!this.model) return [];

            return Object.keys(this.model).map((key) => {
                return {
                    key,
                    value: this.model[key] || "n/a",
                };
            });
        },
        items() {
            return this.entries.map((entry) => {
                const Description =
                    entry.Description.length > this.descriptionLimit
                        ? entry.Description.slice(0, this.descriptionLimit) +
                          "..."
                        : entry.Description;

                return Object.assign({}, entry, { Description });
            });
        },
    },

    watch: {
        search(val) {
            // Items have already been loaded
            if (this.items.length > 0) return;

            // Items have already been requested
            if (this.isLoading) return;

            this.isLoading = true;
            this.query = val

            // Lazily load input items
            fetch("https://api.publicapis.org/entries")
                .then((res) => res.json())
                .then((res) => {
                    const { count, entries } = res;
                    this.count = count;
                    this.entries = entries;
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => (this.isLoading = false));
        },
    },
};
</script>

<style scoped>
.back-tool {
    background: url(https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png);
}
</style>