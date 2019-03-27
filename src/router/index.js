import Vue from 'vue'
import Router from 'vue-router'

import PlayList from "../pages/playlist/playlist.vue"
import Recommend from "../pages/recommend/recommend.vue"
import Mv from "../pages/mv/mv.vue"

// 登陆
import Login from '@/pages/login/login'
import LoginPhone from '@/pages/login/phone/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },{
      path: "/playlist",
      name: "playlist",
      component: PlayList,
      meta:{
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },{
      path: "/recommend",
      name: "recommend",
      component: Recommend
    },{
      path: "/mv",
      name: "mv",
      component: Mv
    },{
      path: '/login',
      name: 'login',
      component: Login,
      children:[
        {
          path:"phone",
          component:LoginPhone
        }
      ]
    }
  ]
})

