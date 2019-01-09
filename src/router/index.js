import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'
import PageCategory from '@/pages/PageCategory'

// Use plugins by calling the Vue.use() global method.
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true // jika akan menggunakan props pada komponen
    },
    {
      path: '/forum/:id',
      name: 'PageForum',
      component: PageForum,
      props: true
    },
    {
      path: '/category/:id',
      name: 'PageCategory',
      component: PageCategory,
      props: true
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
