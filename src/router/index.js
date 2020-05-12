import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: '模块一',
    component: Home,
    children: [
      {
        path: '/module1/page1',
        name: '页面一',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "module1-page1" */ '../views/module1/Page1.vue'
          )
      },
      {
        path: '/module1/page2',
        name: '页面二',
        component: () => import('../views/module1/Page2.vue')
      }
    ]
  },
  {
    path: '/',
    name: '模块二',
    component: Home,
    children: [
      {
        path: '/module2/page1',
        name: '页面一',
        component: () =>
          import(
            /* webpackChunkName: "module2-page1" */ '../views/module2/Page1.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
