import Vue from 'vue'
import Router from 'vue-router'
import { publicPath } from './../vue.config.js'
import Home from './components/home.vue'
import Project from './components/project.vue'

Vue.use(Router)

export default new Router({
  base: publicPath,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: `/projection`,
      name: 'projection',
      component: Project
    }
  ]
})
