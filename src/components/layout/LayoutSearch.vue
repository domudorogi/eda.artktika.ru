<template>
  <layout-section :class="[$style['search']]">
    <grid-container>
      <grid-row>
        <grid-col>
          <ui-input 
            :class="[
              $customStyle['form-control'],
              $customStyle['form-control-lg']
            ]" 
            :input="select" 
            :placeholder="Набирай" 
            :id="search" />
        </grid-col>
      </grid-row>
    </grid-container>
  </layout-section>
</template>

<script>
//import { computed } from 'vue'
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
    return {
    }
  }
}
</script>

<style lang="scss" module>
.search {
  background-color: $gray-100;
}
</style>