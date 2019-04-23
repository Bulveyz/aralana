<template>
    <v-app>
        <navbar></navbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: 'App',
        components: {
            Navbar,
        },
        data() {
            return {
                items: [
                    {title: 'Home', icon: 'dashboard'},
                    {title: 'Records', icon: 'question_answer'},
                    {title: 'About', icon: 'question_answer'}
                ],
                right: null
            }
        }
    }
</script>

