<template>
    <v-container>
        <v-list three-line class="custom-doctor-list">
                <template v-for="(record, index) in records">
                    <v-list-tile class="mb-4 elevation-1" :key="index">
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
                        <v-list-tile-content>
                            <v-list-tile-title v-html="record.title"></v-list-tile-title>
                            
                            <v-list-tile-sub-title v-html="record.subtitle"></v-list-tile-sub-title>
                          
                        </v-list-tile-content>
                        
                        <v-btn v-if="record.active" color="primary" flat>Отменить запись</v-btn>
                        <v-btn color="primary">Подробнее</v-btn>
                    </v-list-tile>
                </template>
                <template v-for="(history, index) in historys">
                    <v-list-tile class="mb-4 elevation-1" :key="index">
                        <v-list-tile-avatar class="badge-indicator">
                        <v-badge color="blue">
                                    <template v-slot:badge>
                                        <span class="text-primary">.</span>
                                    </template>
                                </v-badge>
                         </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="history.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="history.subtitle"></v-list-tile-sub-title>  
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
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
                        status: 'active',
                        subtitle: "<span class='text--primary'>Сегодня в 09:30</span> &mdash; запись к эндокринологу"
                    },
                    {
                        title: 'Запись в обработке',
                        active: true,
                        status: 'await',
                        subtitle: "<span class='text--primary'>Ваша заявка в обработке</span> &mdash; запись к артопеду"
                    },
                    {
                        title: 'Заявка в обработке',
                        active: false,
                        status: 'await',
                        subtitle: "<span class='text--primary'>Ваша заявка в обработке</span> &mdash; запись к отоларингологу"
                    }
                    
                ],
                historys: [
                    {
                        title: 'Запись',
                        active: false,
                        status: '',
                        subtitle: "<span class='text--primary'>Запись</span> &mdash; запись к окулисту"
                    },
                    {
                        title: 'Запись',
                        active: false,
                        status: '',
                        subtitle: "<span class='text--primary'>Запись</span> &mdash; запись к неврологу"
                    },
                    {
                        title: 'Заявка принята',
                        active: false,
                        status: '',
                        subtitle: "<span class='text--primary'>Запись</span> &mdash; запись к педиатору"
                    }
                ]
            }
        }
    }
</script>

<style>
</style>