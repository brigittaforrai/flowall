import Vue from 'vue'
import Router from 'vue-router'
import Connect from './components/connect.vue'
import Project from './components/project.vue'
import { publicPath } from './../vue.config.js'

Vue.use(Router)

export default new Router({
  base: publicPath,
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
