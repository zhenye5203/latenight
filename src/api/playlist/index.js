import * as API from '../index'

export default {
    PlayListDetail:(params)=>{//获取歌单详情
        return API.GET("/playlist/detail",params)
    },
    SongDetail: params =>{
        return API.GET("/song/detail",params)//params:{ids}
    }
}