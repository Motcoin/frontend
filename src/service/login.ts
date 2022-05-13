import axios from 'axios'

const getToken = () => localStorage.getItem('token')

const saveToken = (token: string) => localStorage.setItem('token',token)

const instance = axios.create({ baseURL: 'http://localhost:8000' })

instance.interceptors.request.use(config => {
    config.headers = {
        'Authorization': `Bearer ${getToken()}`,
    }
    return config
})

export const useLogin = (username: string) => instance.post('/auth/login',{ username }).then((res) => {
    saveToken(res.data.token)
    return res
})

export default instance