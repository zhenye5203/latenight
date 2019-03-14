import * as API from '../index'

export default {
    phone: params => {
        return API.GET("/login/cellphone", params)
    }
}