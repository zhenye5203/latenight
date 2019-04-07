import axios from "axios";

// 引入store
import store from '@/store'

import router from '../router'

const Axios = axios.create({
    baseURL:"http://localhost:3000",//设置默认请求前缀
    timeout:10000//接口响应超时时间
})

// aioxs的request拦截器（发送请求时拦截）
Axios.interceptors.request.use(
    config => {
        return Promise.resolve(config)
    },
    err => {
        console.log(response)
        return Promise.reject(err)
    }
)
// aioxs的response拦截器（对请求返回值进行处理）
Axios.interceptors.response.use(
    res => {
        return Promise.resolve(res)
    },
    err => {
        // console.log(err.response)
        switch(err.response.data.code){
            case 301:
                //需要登录
                store.commit("SET_TOASTFLAG",err.response.data.msg)
                router.replace({path:'/login'})
                break;
            case 400:
                store.commit('SET_TOASTFLAG',err.response.data.msg)
                break;
            case 415:
                store.commit('SET_TOASTFLAG',err.response.data.msg)
                break;
            case 501:
                store.commit('SET_TOASTFLAG',err.response.data.msg)
                break;
            case 502:
                if(err.response.data.msg !== undefined){
                    store.commit('SET_TOASTFLAG',err.response.data.msg)
                }else{
                    store.commit('SET_TOASTFLAG','未知错误')
                }
                break;
            case 509:
                store.commit('SET_TOASTFLAG',err.response.data.msg)
                break;
        }
        return Promise.reject(err)
    }
)

export default Axios

// 移除拦截器
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/ });
// axios.interceptors.request.eject(myInterceptor);

// 为自定义axios实例添加拦截器
// var instance = axios.create();
// instance.interceptors.request.use(function () {/*...*/ });