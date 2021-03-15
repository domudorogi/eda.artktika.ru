<template>
  <div :class="[$customStyle['pt-5'], $customStyle['pb-5']]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutSection'
}
</script>
