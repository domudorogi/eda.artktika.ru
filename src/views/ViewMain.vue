<template>
  <layout-search />
  <layout-section>
    <grid-container>
      <grid-row>
        <grid-col :classList="['col-12', 'col-md-3']">
          <layout-filter />
        </grid-col>
        <grid-col :classList="['col-12', 'col-md-9']">
          <grid-row>
            <template v-if="isLoading">
              <grid-col
                v-for="(recipe, index) in recipes"
                :key="index"
                :classList="['col-12', 'col-md-6', 'col-lg-4']"
              >
                <ui-card :recipe="recipe" />
              </grid-col>
            </template>
            <template v-else>
              <grid-col>
                <ui-skeleton />
              </grid-col>
            </template>
          </grid-row>
        </grid-col>
      </grid-row>
    </grid-container>
  </layout-section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GridContainer from '@/components/grid/GridContainer'
import GridRow from '@/components/grid/GridRow'
import GridCol from '@/components/grid/GridCol'
import LayoutSection from '@/components/layout/LayoutSection'
import LayoutFilter from '@/components/layout/LayoutFilter'
import LayoutSearch from '@/components/layout/LayoutSearch'
import UiCard from '@/components/ui/UiCard'
import UiSkeleton from '@/components/ui/UiSkeleton'

export default {
  name: 'ViewMain',
  components: {
    GridContainer,
    GridRow,
    GridCol,
    LayoutSection,
    UiCard,
    LayoutFilter,
    UiSkeleton,
    LayoutSearch
  },
  setup () {
    const store = useStore()
    const recipes = computed(() => store.getters.getRecipes)
    const isLoading = computed(() => store.getters.getRecipesLoader)

    store.dispatch('loadRecipes')

    return {
      recipes,
      isLoading
    }
  }
}
</script>

<style lang="scss" module></style>
