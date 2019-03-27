import * as API from '../index'

export default {
    SongSheetASColl: params =>{
        return API.GET("/user/subcount",params)
    },
    PlayList:params => {
        // 参数为{uid}
        return API.GET("/user/playlist",params)
    }
}