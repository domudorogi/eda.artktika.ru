<template>
  <div :class="[$customStyle['d-flex'], $customStyle['flex-wrap']]" v-if="isLoading">
    {{ queryProducts }}
    <div
      :class="[$customStyle['me-2'], $customStyle['mb-2']]"
      v-for="(product, index) in products"
      :key="index"
    >
      <ui-checkbox-button
        type="checkbox"
        name="productsFilter"
        :id="'product' + index"
        :value="product.product"
        :checked="checkedValue(product.product)"
        v-model:recipes="recipes"
        @change="filterRecipes(recipes), checkedValue(product.product)"
      >
        {{ product.product }}
      </ui-checkbox-button>
    </div>
  </div>
  <ui-skeleton v-else />
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import UiCheckboxButton from '../ui/UiCheckboxButton.vue'
import UiSkeleton from '@/components/ui/UiSkeleton'

export default {
  components: {
    UiCheckboxButton,
    UiSkeleton
  },
  name: 'LayoutFilter',
  setup () {
    const recipes = ref([])
    const store = useStore()
    const query = computed(() => store.getters.getQueryRecipes)
    const products = computed(() => store.getters.getProducts)
    const queryProducts = computed(() => store.getters.getQueryRecipesProducts)
    const isLoading = computed(() => store.getters.getProductsLoader)

    store.dispatch('loadProducts')

    function filterRecipes () {
      store.commit('SET_QUERY_RECIPES', { key: 'p', query: recipes })
      store.commit('SET_RECIPES_LOADER', false)
      store.dispatch('loadRecipes', query.value)
    }

    function checkedValue (product) {
      return queryProducts.value.includes(product)
    }

    return {
      recipes,
      filterRecipes,
      products,
      isLoading,
      checkedValue,
      queryProducts
    }
  }
}
</script>

<style lang="scss" module></style>
