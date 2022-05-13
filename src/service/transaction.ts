import instance from './login'

export const test = () => instance.get('/auth/test')