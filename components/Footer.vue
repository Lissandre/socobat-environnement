<template>
  <nav class="footer">
    <span>
      © Copyright 2020 SOCOBAT Environnement | Tous droits réservés
    </span>
    <nuxt-link :to="{name: 'mentions-legales'}">
      Mentions Légales
    </nuxt-link>
    <nuxt-link :to="{name: 'confidentialite'}">
      Politique de Confidentialité
    </nuxt-link>
    <nuxt-link :to="{name: 'contact'}">
      Contact
    </nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.footer
  width 100%
  position absolute
  bottom 0
  display flex
  justify-content center
  padding 10px 0

.footer a
  color $black
  &:before
    content '|'
    margin-left 4px
    cursor text
</style>
