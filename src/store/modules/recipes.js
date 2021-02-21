import axios from "axios";

export default {
  state: {
    recipes: [],
  },
  getters: {
    getRecipes: (state) => {
      return state.recipes;
    },
    getRecipe: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id == id);
    },
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
  },
  actions: {
    loadRecipes({ commit }) {
      axios
        .get("http://cms.eda.artktika.ru/api/recipes/all")
        .then((response) => response.data)
        .then((recipes) => {
          commit("SET_RECIPES", recipes);
        });
      console.log("Loaded");
    },
  },
};
