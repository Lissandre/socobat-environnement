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
  display flex
  justify-content center
  margin-top 20px
  padding 10px 0
  & span
    color $green

.footer a
  color $green
  &:before
    content '|'
    margin-left 4px
    cursor text

@media screen and (max-width: 840px)
  .footer
    margin 20% 0 10% 0
    padding 0 10%
    flex-direction column-reverse
    text-align center
    align-items center
    & a:before
      display none
</style>
