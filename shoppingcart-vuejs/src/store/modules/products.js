import productsList from 'api/products'
import * as types from 'store/mutation-type.js'

const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const actions = {
  getAllProducts ({ commit }) {
    commit(types.GET_PRODUCT_LIST, productsList)
  }

}

const mutations = {
  [types.GET_PRODUCT_LIST] (state, productsList) {
    state.all = productsList.getAllProducts()
  },

  [types.ADD_TO_CART] (state, product) {
  // the find the triiger obj and minus its storage
    state.all.find((p) => p.id === product.id).inventory--
    console.log('==types.ADD_TO_CART==')
    console.log(state)
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
