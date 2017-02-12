import * as types from 'store/mutation-type.js'

export const addToCart = ({commit}, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, product)
  }
}
