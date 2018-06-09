import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecPage'
import ThirdPage from '../pages/ThirdPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: FirstPage
    },        {
        path: '/exam',
        name: 'exam',
        component: SecondPage
    },
    {
        path: '/cert',
        name: 'cert',
        component: ThirdPage 
    }
  ]
})