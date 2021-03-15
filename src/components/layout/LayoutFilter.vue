<template>
  <div
    :class="[$customStyle['d-flex'], $customStyle['flex-wrap']]"
    v-if="isLoading"
  >
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
        v-model:recipes="recipes"
        @change="filterRecipes(recipes)"
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
    const query = ref('')
    const store = useStore()
    const products = computed(() => store.getters.getProducts)
    const isLoading = computed(() => store.getters.getProductsLoader)

    store.dispatch('loadProducts')

    function filterRecipes (params) {
      query.value = ''
      params.forEach((element, index) => {
        index === 0
          ? (query.value += `?p=${element}`)
          : (query.value += `&p=${element}`)
      })
      store.commit('SET_RECIPES_LOADER', false)
      store.dispatch('loadRecipes', query.value)
    }

    return {
      recipes,
      query,
      filterRecipes,
      products,
      isLoading
    }
  }
}
</script>

<style lang="scss" module></style>
