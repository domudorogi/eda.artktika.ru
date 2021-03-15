import axios from 'axios'

export default {
  state: {
    products: [],
    productsLoader: false
  },
  getters: {
    getProducts: state => {
      return state.products
    },
    getProductsLoader: state => {
      return state.productsLoader
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      products = products.filter(
        (element, index, self) =>
          index === self.findIndex(t => t.product === element.product)
      )
      state.products = products
    },
    SET_PRODUCTS_LOADER (state, loader) {
      state.productsLoader = loader
    }
  },
  actions: {
    loadProducts ({ commit }) {
      axios
        .get('http://cms.eda.artktika.ru/api/products')
        .then(response => response.data)
        .then(products => {
          commit('SET_PRODUCTS', products)
          setTimeout(() => {
            commit('SET_PRODUCTS_LOADER', true)
          }, 300) // Убрать ?
        })
    }
  }
}
