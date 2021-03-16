<template>
  <component :is="isType" :id="id" :placeholder="placeholder">
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UiInput',
  props: {
    type: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    }
  },
  setup (props) {
    const isType = computed(() => {
      if (props.type) {
        return props.type
      }

      return 'input'
    })
    return {
      isType
    }
  }
}
</script>

<style lang="scss" module></style>
