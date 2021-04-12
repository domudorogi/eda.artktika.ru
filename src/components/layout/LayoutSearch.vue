<template>
  <layout-section :class="[$style['search']]">
    <grid-container>
      <grid-row>
        <grid-col>
          <ui-input
            :class="[$customStyle['form-control'], $customStyle['form-control-lg']]"
            placeholder="Введите заголовок рецепта"
            id="search"
            :value="inputValue"
            v-model:title="recipeTitle"
            @input="searchRecipes(recipeTitle)"
          />
        </grid-col>
      </grid-row>
    </grid-container>
  </layout-section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import GridContainer from '@/components/grid/GridContainer'
import GridRow from '@/components/grid/GridRow'
import GridCol from '@/components/grid/GridCol'
import LayoutSection from '@/components/layout/LayoutSection.vue'
import UiInput from '@/components/ui/UiInput'

export default {
  name: 'LayoutHeader',
  components: {
    GridContainer,
    GridRow,
    GridCol,
    LayoutSection,
    UiInput
  },
  setup () {
    const store = useStore()
    const recipeTitle = ref('')
    const inputValue = computed(() => store.getters.getQueryRecipesSearch)
    const query = computed(() => store.getters.getQueryRecipes)

    function searchRecipes (recipeTitle) {
      store.commit('SET_QUERY_RECIPES', { key: 's', query: recipeTitle })
      store.commit('SET_RECIPES_LOADER', false)
      store.dispatch('loadRecipes', query.value)
    }

    return {
      searchRecipes,
      recipeTitle,
      query,
      inputValue
    }
  }
}
</script>

<style lang="scss" module>
.search {
  background-color: $gray-100;
}
</style>
