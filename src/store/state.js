
const state = {
    toast:{
        flag:false,
        msg:""
    },
    loginStatus:{},
    handleUser: '' || localStorage.getItem('user'),
    songSheet:{},//歌单信息
}
export default state