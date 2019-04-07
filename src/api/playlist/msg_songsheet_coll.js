import * as API from '../index'

export default {
    SongSheetASColl: params =>{//获取用户信息 , 歌单，收藏，mv, dj 数量
        return API.GET("/user/subcount",params)
    },
    PlayList:params => {
        // 参数为{uid}
        return API.GET("/user/playlist",params)
    }
}