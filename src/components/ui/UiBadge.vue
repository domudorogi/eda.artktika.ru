<template>
  <span
    :class="[
      $customStyle['badge'],
      $customStyle['rounded-pill'],
      $customStyle['bg-primary'],
      $customStyle['mb-1'],
      $customStyle['me-1']
    ]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'UiBadge'
}
</script>

<style lang="scss" module></style>
