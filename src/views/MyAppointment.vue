<template>
    <v-container>
       
        <v-list three-line>
            <transition-group
                    name="staggered-fade"
                    v-bind:css="false"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
            >
                <template v-for="(records, index) in records">
                    <v-list-tile class="mb-4" :key="index">
                        <v-list-tile-content>
                            <v-list-tile-title v-html="records.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="records.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-btn v-if="records.active" color="warning">Отменить запись</v-btn>
                        <v-btn color="info">Подробнее</v-btn>
                    </v-list-tile>
                </template>
            </transition-group>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "DotctorsList",
        data() {
            return {
                header: [
                    {
                        title: 'records (100g serving)',
                        align: 'left',
                        subtitle: 'subtitle'
                    }
                ],
                records: [
                    {
                        title: 'Запись',
                        active: true,
                        subtitle: "<span class='text--primary'>Сегодня в 09:30</span> &mdash; запись к эндокринологу"
                    },
                    {
                        title: 'Запись одобрена',
                        active: true,
                        subtitle: "<span class='text--primary'>Ваша заявка одобрена</span> &mdash; завтра в 09:30 запись к эндокринологу"
                    },
                    {
                        title: 'Заявка принята',
                        active: false,
                        subtitle: "<span class='text--primary'>Ваша заявка принята</span> &mdash; запись к эндокринологу"
                    },
                    {
                        title: 'Запись',
                        active: false,
                        subtitle: "<span class='text--primary'>Сегодня в 11:10</span> &mdash; запись к окулисту"
                    },
                    {
                        title: 'Запись одобрена',
                        active: false,
                        subtitle: "<span class='text--primary'>Ваша заявка одобрена</span> &mdash; 11/06/19 в 11:10 запись к окулисту"
                    },
                    {
                        title: 'Заявка принята',
                        active: false,
                        subtitle: "<span class='text--primary'>Ваша заявка принята</span> &mdash; запись к окулисту"
                    },
                ]
            }
        }
    }
</script>

<style>
</style>