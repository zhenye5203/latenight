import axios from './request'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['xhrFields'] = 'withCredentials: true';
// 跨域请求携带cookie
axios.defaults.withCredentials = true; 


// let base = "http://localhost:3000"

export const GET = (url, params) => {
    return axios.get(`${url}`, { params }).then(res => res.data)
}
export const POST = (url, params) => {
    return axios.post(`${url}`, params).then(res => res.data)
}
export const PUT = (url, params) => {
    return axios.put(`${url}`, { params }).then(res => res.data)
}