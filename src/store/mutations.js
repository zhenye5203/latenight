import * as type from './mutations-type'

const mutations = {
    [type.SET_TOASTFLAG](state,msg){//toast提示
        state.toast = {flag:!state.toast.flag,msg}
    },
    [type.SET_LOGINSTATUS](state,data){
        state.loginStatus = data
    },
    [type.SET_HANDLEUSER](state,data){
        state.handleUser = data
    }
}

export default mutations