import axios from 'axios'

export default {
  state: {
    recipes: [],
    favoriteRecipes: [],
    recipesLoader: false
  },
  getters: {
    getRecipes: state => {
      return state.recipes
    },
    getFavoriteRecipes: state => {
      return state.favoriteRecipes
    },
    getRecipesLoader: state => {
      return state.recipesLoader
    }
  },
  mutations: {
    SET_RECIPES (state, recipes) {
      state.recipes = recipes
    },
    SET_FAVORITE_RECIPES (state, id) {
      let favoriteIndex
      const favoriteRecipe = state.recipes.filter(recipe => recipe.id == id)
      const isInclude = state.favoriteRecipes.some((recipe, index) => {
        favoriteIndex = index
        return recipe.id == id
      })

      isInclude
        ? state.favoriteRecipes.splice(favoriteIndex, 1)
        : state.favoriteRecipes.push(favoriteRecipe[0])
    },
    SET_RECIPES_LOADER (state, loader) {
      state.recipesLoader = loader
    }
  },
  actions: {
    loadRecipes ({ commit }, query) {
      query = query === undefined ? '' : query
      axios
        .get(`http://cms.eda.artktika.ru/api/recipes/${query}`)
        .then(response => response.data)
        .then(recipes => {
          commit('SET_RECIPES', recipes)
          setTimeout(() => {
            commit('SET_RECIPES_LOADER', true)
          }, 300) // Убрать ?
        })
    }
  }
}
