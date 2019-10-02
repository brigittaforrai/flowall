import Vue from 'vue'
import Router from 'vue-router'
import { publicPath } from './../vue.config.js'
import Home from './components/home.vue'
import Project from './components/project.vue'

const url = process.env.VUE_APP_URL === 'brigittaforrai.com' ? 'https://' + process.env.VUE_APP_URL + '/designhet2019' : 'https://' + process.env.VUE_APP_URL
const projection = `${url}/#/projection`
const image = `${url}/thumbnail.png`

Vue.use(Router)
export default new Router({
  base: publicPath,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        metaTags: [
          {
            name: 'og:image',
            content: image
          },
          {
            property: 'og:url',
            content: projection
          },
          {
            property: 'og:image:url',
            content: projection
          },
          {
            property: 'twitter:image',
            content: image
          }
        ]
      }
    },
    {
      path: `/projection`,
      name: 'projection',
      component: Project
    }
  ]
})
