import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import cindex from '@/components/index'
import pdf from '@/pages/pdf'
import image from '@/pages/image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cindex'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [{
        path: '/cindex',
        name: 'cindex',
        component: cindex
      }, {
        path: '/pdf',
        name: 'pdf',
        component: pdf
      }, {
        path: '/image',
        name: 'image',
        component: image
      }]
    }
  ]
})
