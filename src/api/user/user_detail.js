import * as API from '../index'

export default {
    userDetail: params => {
        return API.GET("/user/detail", params)
    },
}