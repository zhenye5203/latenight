import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let base = "http://localhost:3000"

export const GET = (url, params) => {
    return axios.get(`${base}${url}`, { params }).then(res => res.data)
}
export const POST = (url, params) => {
    return axios.post(`${base}${url}`, params).then(res => res.data)
}
export const PUT = (url, params) => {
    return axios.put(`${base}${url}`, { params }).then(res => res.data)
}