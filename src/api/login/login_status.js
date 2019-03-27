import * as API from '../index'

export default {
    LoginStatus: params => {
        return API.GET("/login/status", params)
    },
}