import { createRouter, createMemoryHistory} from 'vue-router'

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'login', path: '/login', component: Login },
]

export default createRouter({  
  history: createMemoryHistory(),
  routes
})