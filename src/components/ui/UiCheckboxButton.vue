<template>
  <input
    :type="type"
    :class="[$customStyle['btn-check']]"
    :name="name"
    :value="value"
    :id="id"
    @input="check()"
    v-bind="$attrs"
  />
  <label
    :class="[$customStyle['btn'], $customStyle['btn-outline-primary']]"
    :for="id"
  >
    <slot />
  </label>
</template>

<script>
import { computed } from 'vue'

export default {
  emits: ['update:recipes'],
  name: 'UiCheckboxButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '',
      required: true
    },
    recipes: {
      type: Array,
      required: true
    }
  },
  setup (props, context) {
    const checked = computed(() => props.recipes.includes(props.value))

    function check () {
      let updatedRecipes = [...props.recipes]
      if (this.checked) {
        updatedRecipes.splice(updatedRecipes.indexOf(props.value), 1)
      } else {
        updatedRecipes.push(props.value)
      }
      context.emit('update:recipes', updatedRecipes)
    }

    return {
      check,
      checked
    }
  }
}
</script>

<style lang="scss" module></style>
