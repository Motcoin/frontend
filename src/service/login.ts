import { TokenAxiosWrapper } from 'vue-3-base-utils'

const axios = new TokenAxiosWrapper({axiosConfig: { baseURL: 'http://localhost:8000'}, localStorage: true }).create()

export const useLogin = (username: string) => axios.post('/auth/login',{ username })

export default axios