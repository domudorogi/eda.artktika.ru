import axios from "axios";

export default {
  state: {
    pageRecipe: [],
  },
  getters: {
    getPageRecipe: (state) => {
      return state.pageRecipe;
    },
  },
  mutations: {
    SET_RECIPE(state, recipe) {
      let recipeProduct = recipe.products;
      let quantityText = "по вкусу";
      recipeProduct.forEach((element) => {
        element.quantity === 0 ? (element.quantity = quantityText) : "";
      });
      state.pageRecipe = recipe;
    },
    calc_Composition(state, value) {
      let value1 = +value.v1;
      let value2 = +value.v2;
      state.pageRecipe.products.forEach((element) => {
        if (element.quantity > 0) {
          element.quantity = (element.quantity / value1) * value2;
        }
      });
    },
  },
  actions: {
    calcComposition({ commit }, value) {
      commit("calc_Composition", value);
    },
    loadRecipe({ commit }, idRecipe) {
      axios
        .get("http://cms.eda.artktika.ru/api/recipes/" + idRecipe)
        .then((response) => response.data)
        .then((recipe) => {
          commit("SET_RECIPE", recipe[0]);
          console.log("777");
        });
    },
  },
};
