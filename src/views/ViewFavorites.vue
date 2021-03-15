<template>
  <layout-section>
    <grid-container>
      <grid-row>
        <template v-if="favoriteRecipes.length">
          <grid-col
            v-for="(recipe, index) in favoriteRecipes"
            :key="index"
            :classList="['col-12', 'col-md-3']"
          >
            <ui-card :recipe="recipe" />
          </grid-col>
        </template>
        <template v-else>
          <grid-col>
            <ui-alert
              :class="[$customStyle['alert'], $customStyle['alert-danger']]"
              >Добавьте товары в избранное</ui-alert
            >
          </grid-col>
        </template>
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
import UiCard from '@/components/ui/UiCard'
import UiAlert from '@/components/ui/UiAlert'

export default {
  name: 'ViewFavorites',
  components: {
    GridContainer,
    GridRow,
    GridCol,
    LayoutSection,
    UiCard,
    UiAlert
  },
  setup () {
    const store = useStore()
    const favoriteRecipes = computed(() => store.getters.getFavoriteRecipes)

    return {
      favoriteRecipes
    }
  }
}
</script>

<style lang="scss" module></style>
