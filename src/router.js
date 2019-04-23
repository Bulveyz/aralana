import Vue from 'vue'
import Router from 'vue-router'

import Doctors from "./views/Doctors";
import MyAppointment from "./views/MyAppointment";
import Profile from "./views/Profile";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Doctors
    },
    {
      path: '/my-appointment',
      name: 'appointment',
      component: MyAppointment
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})