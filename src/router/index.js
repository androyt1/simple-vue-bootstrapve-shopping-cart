import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    props:true,
    name: 'About',
    
    component: () => import( '../views/About.vue')
  },
  {
    path: '/cart',
    props:true,
    name: 'Cart',    
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/shipping',    
    name: 'Shipping',    
    component: () => import( '../views/Shipping.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
