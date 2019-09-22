import Vue from 'vue'
import Router from 'vue-router'
import Connect from './components/connect.vue'
import Project from './components/project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'play',
      component: Connect
    },
    {
      path: '/projection',
      name: 'projection',
      component: Project
    }
  ]
})
