<template>
    <v-toolbar dark color="primary">
        <v-toolbar-title color="white">Doctor Pointer</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-menu left offset-y class="mr-3" :nudge-width="100">
                <template slot='activator'>
                    <v-toolbar-title>
                        <v-badge class="d-flex custom-badge" left color="pink accent-3">
                            <template v-if="notification" slot="badge">
                                <span>6</span>
                            </template>
                            <v-icon dark>notifications_none</v-icon>
                        </v-badge>
                    </v-toolbar-title>
                </template>

                <v-list>
                    <template v-for="(record, index) in record">
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="record.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="record.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-menu>
            <v-btn flat>Мои записи</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                notification: false,
                record: [
                    {
                        title: 'Запись',
                        subtitle: "<span class='text--primary'>Сегодня в 09:30</span> &mdash; запись к эндокринологу"
                    },
                    {
                        title: 'Запись',
                        subtitle: "<span class='text--primary'>Ваша заявка одобрена</span> &mdash; завтра в 09:30 запись к эндокринологу"
                    },
                    {
                        title: 'Запись',
                        subtitle: "<span class='text--primary'>Ваша заявка принята</span> &mdash; запись к эндокринологу"
                    }
                ]
            }
        }
    }
</script>

<style>
    .custom-badge .v-badge__badge {
        position: static;
        font-size: 13px;
        height: 20px;
        width: 20px;
    }
</style>