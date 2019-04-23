<template>
    <v-toolbar dark color="primary">
        <v-toolbar-title color="white">
            Doctor Pointer
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-menu :close-on-content-click="false" left content-class="white" offset-y :nudge-width="300">
                <template slot='activator'>
                    <v-btn flat @click="notificationClear()">
                        <v-toolbar-title>
                            <v-badge class="d-flex custom-badge" left color="pink accent-3">
                                <template v-if="notification" slot="badge">
                                    <span>{{notificationsCount}}</span>
                                </template>
                                <v-icon dark>notifications_none</v-icon>
                            </v-badge>
                        </v-toolbar-title>
                    </v-btn>
                </template>

                <v-list two-line v-if="records.length > 0">
                    <template v-for="(record, index) in records">
                        <v-list-tile :key="index">
                            <v-list-tile-content>
                                <v-list-tile-title v-html="record.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="record.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-avatar class="badge-indicator">
                                <v-badge v-if="record.status == 'cancle'">
                                    <template v-slot:badge>
                                        <span class="text-primary">.</span>
                                    </template>
                                </v-badge>

                                <v-badge color="green accent-3" v-else-if="record.status == 'active'">
                                    <template v-slot:badge>
                                        <span class="text-green">.</span>
                                    </template>
                                </v-badge>

                                <v-badge color="yellow" v-else-if="record.status == 'await'">
                                    <template v-slot:badge>
                                        <span class="text-yellow">.</span>
                                    </template>
                                </v-badge>
                            </v-list-tile-avatar>
                        </v-list-tile>

                        <v-divider v-if="records.length !== index + 1"></v-divider>
                    </template>
                </v-list>

                <div v-if="records.length > 0">
                    <v-btn @click="records = []; notifications = 0" flat color="primary" block>Очистить</v-btn>
                </div>

                <div v-else class="text-sm-center">
                    <h3 class="text-primary">Пусто</h3>
                </div>
            </v-menu>
            <v-btn to="/" flat>Записаться</v-btn>
            <v-btn to="/my-appointment" flat>Мои записи</v-btn>
            <v-btn to="/profile" flat>
                <v-icon>person</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                notification: false,
                notifications: 0,
                notificationsCount: 0,
                records: [
                    {
                        title: 'Запись',
                        subtitle: "Запись к эндокринологу",
                        status: 'active'
                    },
                    {
                        title: 'Отмена записи',
                        subtitle: "Отмена записи к терапевту",
                        status: 'cancle'
                    },
                ],
            }
        },
        methods: {
            notificationClear() {
                this.notification = false;
                this.notifications = this.records.length;
            }
        },
        mounted() {
            this.notifications = this.records.length;
            this.notificationsCount = this.notifications;
            Event.listen('appointment', (paylaod) => {

                this.records.unshift({
                    title: 'Запись',
                    subtitle: 'Запись к ' + paylaod.doctor.title.toLowerCase() + 'у',
                    status: 'await'
                });
                this.notification = true;
                this.notificationsCount = this.records.length - this.notifications;
            });
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

    .badge-indicator .v-badge__badge {
        height: 14px;
        width: 14px;
    }

    .badge-indicator .v-badge__badge span {
        display: none;
    }

    .text-primary {
        color: #ef5350 !important;
    }

    .text-green {
        color: #00E676 !important;
    }

    .text-yellow {
        color: #FFEB3B !important;
    }
</style>