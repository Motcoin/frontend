import axios from './login'

export const test = () => axios.get('/auth/test')