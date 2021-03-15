<template>
  <a
    href="/"
    :class="[
      $style['logotype'],
      $customStyle['h5'],
      $customStyle['text-uppercase']
    ]"
  >
    {{ logoText }}
  </a>
</template>

<script>
export default {
  name: 'Logotype',
  props: {
    logoText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.logotype {
  color: $white;
  text-decoration: none;

  &:hover {
    color: $gray-300;
  }
}
</style>
