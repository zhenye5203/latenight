import axios from "axios";

// 引入store
import store from '@/store'

const Axios = axios.create({
    baseURL:"http://localhost:3000",
    timeout:10000
})

Axios.interceptors.request.use(
    config => {
        console.log(config)
        return Promise.resolve(config)
    },
    err => {
        console.log(response)
        return Promise.reject(err)
    }
)

Axios.interceptors.response.use(
    res => {
        console.log(res)
        return Promise.resolve(res)
    },
    err => {
        console.log(err.response)
        switch(err.response.data.code){
            case 400:
                console.log(err.response.data.msg)
                store.commit('SET_TOASTFLAG', err.response.data.msg)
        }
        return Promise.reject(err)
    }
)

export default Axios