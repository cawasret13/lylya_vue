import Vuex from 'vuex'
import cart from './modules/cart'
import list_product from './modules/list_products'
import lk from './modules/lk'
import app from './modules/app'

const storage = new Vuex.Store({
  modules: {
      cart,
      list_product,
      lk,
      app
  }
})
export default storage