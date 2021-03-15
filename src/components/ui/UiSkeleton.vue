<template>
  <div :class="[$style['skeleton']]">
    <div
      :class="[$style['skeleton__line'], $style['skeleton__line--first']]"
    ></div>
    <div
      :class="[$style['skeleton__line'], $style['skeleton__line--second']]"
    ></div>
    <div
      :class="[$style['skeleton__line'], $style['skeleton__line--third']]"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'UiSkeleton'
}
</script>

<style lang="scss" module>
.skeleton {
  width: 100%;

  &__line {
    background-color: #f8f9fa;
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      #f8f9fa;
    background-size: 200% 100%;
    background-position-x: 180%;
    height: 1.4rem;
    animation: loading 3s infinite;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &--first {
      width: 80%;
      animation-delay: 0.04s;
    }

    &--second {
      width: 90%;
      animation-delay: 0.05s;
    }

    &--third {
      width: 100%;
      animation-delay: 0.06s;
    }
  }
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>
