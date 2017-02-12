import * as types from 'store/mutation-type.js'

const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  getAddedProducts: state => state.added
}

const mutations = {
  [types.ADD_TO_CART] (state, product) {
  // the find the triiger obj and minus its storage
    var record = state.added.find((p) => p.id === product.id)
    if (!record) {
      state.added.push({
        'id': product.id,
        'title': product.title,
        'quantity': 1,
        'price': product.price
      })
    } else {
      record.quantity++
    }
  }
}

export default{
  state,
  getters,
  mutations
}
