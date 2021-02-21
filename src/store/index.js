import { createStore } from "vuex";
import recipes from "./modules/recipes";
import recipe from "./modules/recipe";

export default createStore({
  modules: {
    recipes,
    recipe,
  },
});
