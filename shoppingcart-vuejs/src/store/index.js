import Vue from 'vue'
import Vuex from 'vuex'
import products from 'store/modules/products'
import cart from 'store/modules/cart'
import * as actions from 'store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    products,
    cart
  }
})
