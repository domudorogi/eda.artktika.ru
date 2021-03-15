<template>
  <div :class="[$customStyle.row]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridRow'
}
</script>
