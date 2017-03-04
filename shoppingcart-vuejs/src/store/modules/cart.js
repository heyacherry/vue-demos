import * as types from 'store/mutation-type.js'

const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  getAddedProducts: state => state.added,
  getTotalQuantity: state => state.added.length > 0 ? state.added.map(addedProduct => addedProduct.quantity).reduce((prev, curr) => prev + curr, 0) : 0,
  getTotalPrice: state => state.added.length > 0 ? state.added.map(addedProduct => addedProduct.quantity * addedProduct.price).reduce((prev, curr) => prev + curr, 0) : 0
}

const mutations = {
  [types.ADD_TO_CART] (state, product) {
    // the find the triiger obj and minus its storage
    let record = state.added.find((p) => p.id === product.id)
    if (!record) {
      state.added.push({
        'id': product.id,
        'title': product.title,
        'quantity': 1,
        'price': product.price
      })
    } else { record.quantity++ }
  },

  [types.DELETE_PRODUCT] (state, productTitle) {
    let index = state.added.findIndex((p) => p.title === productTitle)
    if (index !== -1) {
      state.added[index].quantity--
      if (state.added[index].quantity === 0) {
        state.added.splice(index, 1)
      }
    }
  }
}

export default{
  state,
  getters,
  mutations
}
