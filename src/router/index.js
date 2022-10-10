import { createRouter, createWebHashHistory } from 'vue-router'
import Products from '../views/pageAllProducts.vue'
import Mobile from '../views/mobileAllProduct.vue'
import GL from '../components/gl.vue'
import LK from '../components/PersonalArea.vue'
import Cart from '../components/cart.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: GL
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props: true
  },
  {
    path: '/lk',
    name: 'lk',
    component: LK,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
