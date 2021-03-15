<template>
  <header :class="[$style['header'], $customStyle['sticky-top']]">
    <div
      :class="[
        $style['header__top'],
        $customStyle['pt-3'],
        $customStyle['pb-3']
      ]"
    >
      <grid-container>
        <grid-row :class="[$customStyle['align-items-center']]">
          <grid-col :classList="['col-12', 'col-md-4']">
            <logotype logoText="Eda" />
          </grid-col>
          <grid-col :classList="['col-12', 'col-md-8']">
            <nav
              :class="[
                $customStyle['nav'],
                $customStyle['justify-content-end']
              ]"
            >
              <router-link
                v-for="(link, index) in navLinks"
                :key="index"
                :class="[$customStyle['nav-link'], $style['header-link']]"
                :to="link.link"
              >
                {{ link.name }}
                <span
                  v-if="link.favorite"
                  :class="[$customStyle['badge'], $customStyle['bg-dark']]"
                >
                  {{ favoriteCount }}
                </span>
              </router-link>
            </nav>
          </grid-col>
        </grid-row>
      </grid-container>
    </div>
    <div
      :class="[
        $style['header__bottom'],
        $customStyle['pt-3'],
        $customStyle['pb-3']
      ]"
    >
      <grid-container>
        <grid-row>
          <grid-col>
            <input
              type="text"
              :class="[
                $customStyle['form-control'],
                $customStyle['form-control-lg']
              ]"
              id=""
            />
          </grid-col>
        </grid-row>
      </grid-container>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GridContainer from '@/components/grid/GridContainer'
import GridRow from '@/components/grid/GridRow'
import GridCol from '@/components/grid/GridCol'
import Logotype from '@/components/Logotype.vue'

export default {
  name: 'LayoutHeader',
  components: {
    GridContainer,
    GridRow,
    GridCol,
    Logotype
  },
  setup () {
    const store = useStore()
    const favoriteCount = computed(
      () => store.getters.getFavoriteRecipes.length
    )

    return {
      favoriteCount,
      navLinks: [
        { link: '/', name: 'Главная' },
        { link: '/favorites', name: 'Избранные рецепты', favorite: true }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.header {
  background-color: $blue-500;

  &__bottom {
    background-color: $gray-100;
  }
}

.header-link {
  color: $white;

  &:hover {
    color: $gray-300;
  }
}
</style>

<style lang="scss">
.router-link-exact-active {
  color: $gray-300;
}
</style>
