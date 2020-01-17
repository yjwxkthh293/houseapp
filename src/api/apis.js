import axios from 'axios'
import qs from 'qs'

export const IP='http://172.16.14.247:666'
// export const IP='http://192.168.101.103:666'
// export const IP='http://192.168.101.103:666'
const req = axios.create({
    baseURL: IP,
    timeout: 10000
})

export function login(acc, pwd){
    return req.post('/login.php', qs.stringify({acc, pwd}))
}
export const gethouselist=()=>{
    return req.get('/gethouselist.php')
}
