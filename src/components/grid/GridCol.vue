<template>
  <div :class="setClass()">
    <slot />
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'GridCol',
  props: {
    classList: {
      type: Array,
      default: () => ['col']
    }
  },
  setup (props) {
    const { proxy } = getCurrentInstance()

    function setClass () {
      let resultClassList = []

      props.classList.forEach(item => {
        resultClassList.push(proxy.$customStyle[item])
      })

      return resultClassList
    }

    return {
      setClass
    }
  }
}
</script>
