<template>
  <v-app>
    <v-toolbar app color="indigo">
    </v-toolbar>
<v-navigation-drawer permanent fixed width="230">

<v-toolbar flat >
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Doctor pointer
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  
      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Records', icon: 'question_answer' },
        { title: 'Doctors list', icon: 'question_answer'},
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  }
}
</script>