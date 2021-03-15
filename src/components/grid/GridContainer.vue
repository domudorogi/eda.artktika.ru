<template>
  <div :class="[$customStyle['container']]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridContainer'
}
</script>
