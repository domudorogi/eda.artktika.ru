import axios from 'axios'

export default {
  state: {
    recipes: [],
    favoriteRecipes: [],
    queryRecipes: {
      p: [],
      s: ''
    },
    recipesLoader: false
  },
  getters: {
    getRecipes: state => {
      return state.recipes
    },
    getFavoriteRecipes: state => {
      return state.favoriteRecipes
    },
    getQueryRecipesProducts: state => {
      return state.queryRecipes.p
    },
    getQueryRecipesSearch: state => {
      return state.queryRecipes.s
    },
    getQueryRecipes: state => {
      const query = () => {
        let queryString = '?'
        const queryRecipesLength = state.queryRecipes.p.length

        if (queryRecipesLength) {
          state.queryRecipes.p.forEach(element => {
            queryString += 'p=' + element + '&'
          })
        }

        if (state.queryRecipes.s.length) queryString += 's=' + state.queryRecipes.s

        return queryString
      }

      return query()
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
      const favoriteRecipe = state.recipes.filter(recipe => recipe.id === id)
      const isInclude = state.favoriteRecipes.some((recipe, index) => {
        favoriteIndex = index
        return recipe.id === id
      })

      isInclude
        ? state.favoriteRecipes.splice(favoriteIndex, 1)
        : state.favoriteRecipes.push(favoriteRecipe[0])
    },
    SET_QUERY_RECIPES (state, { key, query }) {
      const queryRecipes = state.queryRecipes
      if (key === 'p') {
        queryRecipes.p = query
      } else if (key === 's') {
        queryRecipes.s = query
      }
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
