import axios from 'axios'

export default {
  state: {
    recipe: []
  },
  getters: {
    getRecipe: state => {
      return state.recipe
    }
  },
  mutations: {
    SET_RECIPE (state, recipe) {
      let recipeProduct = recipe.products
      let quantityText = 'по вкусу'

      recipeProduct.forEach(element => {
        element.quantity === 0 ? (element.quantity = quantityText) : ''
      })

      state.recipe = recipe
    },
    CALC_COMPOSITION (state, value) {
      let value1 = +value.v1
      let value2 = +value.v2

      state.recipe.products.forEach(element => {
        if (element.quantity > 0) {
          element.quantity = (element.quantity / value1) * value2
        }
      })
    }
  },
  actions: {
    calcComposition ({ commit }, value) {
      commit('CALC_COMPOSITION', value)
    },
    loadRecipe ({ commit }, idRecipe) {
      axios
        .get(`http://cms.eda.artktika.ru/api/recipe/${idRecipe}`)
        .then(response => response.data)
        .then(recipe => {
          commit('SET_RECIPE', recipe[0])
        })
    }
  }
}
