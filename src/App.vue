<template>
  <layout-header />
  <main>
    <router-view />
  </main>
  <layout-footer />
</template>

<script>
import LayoutHeader from '@/components/layout/LayoutHeader'
import LayoutFooter from '@/components/layout/LayoutFooter'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang="scss"></style>
