<template>
  <component
    :is="isType"
    :id="id"
    :placeholder="placeholder"
    :value="title"
    @input="getValue($event.target.value)"
  >
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  emits: ['update:title'],
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
    },
    title: {
      type: String,
      required: false
    }
  },
  setup (props, context) {
    const isType = computed(() => {
      if (props.type) {
        return props.type
      }
      return 'input'
    })

    function getValue (value) {
      context.emit('update:title', value)
    }

    return {
      isType,
      getValue
    }
  }
}
</script>

<style lang="scss" module></style>
