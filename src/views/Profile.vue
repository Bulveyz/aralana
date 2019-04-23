<template>
    <v-container>
        <v-card-title class="headline primary white--text">
            Карточка пациента, участок №3
        </v-card-title>
        <v-card-text class="elevation-1">
            <v-form>
                <v-container>
                    <v-layout>
                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="last_firstname"
                                    label="Фамимлия"
                                    required
                            ></v-text-field>
                        </v-flex>

                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="first_name"
                                    label="Имя"
                                    required
                            ></v-text-field>
                        </v-flex>

                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="sername"
                                    label="Отчество"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="iin"
                                    label="ИИН"
                                    required
                            ></v-text-field>
                        </v-flex>

                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="address"
                                    label="Адрес"
                                    required
                            ></v-text-field>
                        </v-flex>

                        <v-flex
                                xs12
                                md4
                        >
                            <v-text-field
                                    v-model="email"
                                    label="Email"
                                    type="email"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <div class="text-sm-right">
                        <v-btn color="primary">Сохранить</v-btn>
                    </div>
                </v-container>
            </v-form>
        </v-card-text>
    </v-container>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                last_firstname: 'Айбатов',
                first_name: 'Валерий',
                sername: 'Олегович',
                iin: 'XXXXXXXXXXXXX',
                address: 'Абая 17/2, 54'
            }
        }
    }
</script>

<style scoped>

</style>