<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link to="/">
        SOCOBAT
      </nuxt-link>
    </div>
    <div class="linksList">
      <nuxt-link to="/">
        Accueil
      </nuxt-link>
      <nuxt-link to="/location-bennes">
        Location de bennes
      </nuxt-link>
      <nuxt-link to="/centre-de-tri">
        Centre de tri
      </nuxt-link>
      <nuxt-link to="/services">
        Services
      </nuxt-link>
      <nuxt-link to="/devis">
        Votre devis
      </nuxt-link>
      <nuxt-link to="/a-propos">
        À propos
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.nav
  position fixed
  width 100%
  padding 20px 5%
  display flex
  justify-content space-between

.linksList a
  position relative
  display inline-block
  color $green
  text-transform uppercase
  &:not(:first-child)
    margin-left 15px
  &:before, &:after
    content ''
    position absolute
    top 50%
    width 0%
    height 2px
  &:before
    left 0px
  &:after
    right 0px
    transition 0.404s width ease
    background $green
  &:hover:before
    width 100%
    transition 0.404s width ease
    background $green
  &:hover:after
    width 100%
    background transparent
</style>
