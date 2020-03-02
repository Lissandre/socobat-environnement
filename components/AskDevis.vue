<template>
  <nuxt-link :to="{name: 'devis'}" class="devisButton">
    Demander un devis
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.devisButton
  background $green
  padding 1% 5%
  box-sizing border-box
  color $white
  text-transform  uppercase
  font-weight bold
  display block
  width fit-content
  margin 0 auto
</style>
