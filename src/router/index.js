import Vue from 'vue'
import Router from 'vue-router'
import POS from '@/components/pages/POS'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'POS',
      component: POS
    }
  ]
})
