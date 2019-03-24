import * as type from './mutations-type'

const mutations = {
    [type.SET_TOASTFLAG](state,msg){//toast提示
        state.toast = {flag:!state.toast.flag,msg}
    }
}

export default mutations