import { createStore } from 'vuex'
import recipes from './modules/recipes'
import recipe from './modules/recipe'
import products from './modules/products'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    recipes,
    recipe,
    products
  },
  plugins: [createPersistedState()]
})
