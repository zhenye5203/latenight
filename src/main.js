// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入lib-flexible/flexible
import 'lib-flexible/flexible'

// 引入图标库
import "./assets/iconfont/iconfont.css"

// 清除默认样式
import "./assets/reset.css"
import "./assets/global.less"

// 引入axios并全局配置
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)


//引入图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:require('@/assets/loading/error.png'),//图片加载错误时的显示
  loading:require('@/assets/loading/loading.png'),//图片懒加载是的图片
})
// Vue.prototype.host = "/api"

// 引入vue-touch
import VueTouch from 'vue-touch'

Vue.use(VueTouch,{name:'v-touch'})
VueTouch.config.swipe = {
  threshold:60,//手机的滑动距离
  direction: 'horizontal'
}

// 引入vuex store
import store from './store'

// 获取用户详情并提交到vuex中

// router.beforeEach((to,from,next)=>{
//   let user = localStorage.getItem('user')
//   console.log(user)
//   if(user != null){
//     next()
//   } else if (to.path !== '/'){
//     next({path:'/login'})
//     store.commit('SET_TOASTFLAG',"请重新登录")
//   }
// })


Vue.config.productionTip = false //阻止启动生产消息

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
