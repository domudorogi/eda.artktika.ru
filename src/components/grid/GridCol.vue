<template>
  <div :class="setClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GridCol",
  props: {
    classList: {
      type: Array,
      default: () => ["col"],
    },
  },
  computed: {
    setClass() {
      let resultClassList = [];

      this.classList.forEach((item) => {
        resultClassList.push(this.$customStyle[item]);
      });

      return resultClassList;
    },
  },
};
</script>
