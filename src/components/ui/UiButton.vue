<template>
  <component :is="type" :to="to">
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UiButton',
  props: {
    to: {
      required: false
    }
  },
  setup (props) {
    const type = computed(() => {
      if (props.to) {
        return 'router-link'
      }

      return 'button'
    })
    return {
      type
    }
  }
}
</script>

<style lang="scss" module></style>
