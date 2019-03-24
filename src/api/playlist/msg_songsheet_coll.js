import * as API from '../index'

export default {
    SongSheetASColl: params =>{
        return API.GET("/user/subcount",params)
    },
    userDetail:params =>{
        return API.GET("/user/detail",params)
    }
}