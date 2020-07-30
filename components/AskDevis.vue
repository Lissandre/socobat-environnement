<template>
  <nuxt-link :to="{name: 'demande-de-devis'}" class="devisButton">
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
  transition 0.3s transform ease
  &:hover
    transform scale(0.95)

@media screen and (max-width: 840px)
  .devisButton
    padding 20px 40px
</style>
