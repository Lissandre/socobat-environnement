<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="@/assets/images/logo_socobat_environnement.svg" alt="Logo Socobat Environnement SVG">
      </nuxt-link>
    </div>
    <ul class="linksList">
      <li>
        <nuxt-link :to="{name: 'index'}">
          Accueil
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'services-location-bennes'}">
          Location de bennes
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'centre-de-tri'}">
          Centre de tri
        </nuxt-link>
      </li>
      <li class="headScrollingMenu">
        <nuxt-link :to="{name: 'services'}">
          Services
        </nuxt-link>
        <ul class="scrollingMenu">
          <li>
            <nuxt-link :to="{name: 'services-location-de-materiel'}">
              Location de matériel
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'services-depot-de-dechets'}">
              Dépôt de déchets
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'services-evacuation-de-dechets'}">
              Évacuation de déchets
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'services-diagnostic-de-pollution'}">
              Diagnostic de pollution
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link :to="{name: 'devis'}">
          Votre devis
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'a-propos'}">
          À propos
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'contact'}">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.nav
  background $white
  position fixed
  width 100%
  height 70px
  padding 0 5%
  display flex
  justify-content space-between
  align-items center
  box-shadow $shadow

.logo a img
  height 40px

.linksList
  background $white
  display flex
  height 100%
  & li
    list-style none
    display flex
    align-items center
    height 100%
    &:not(:first-child)
      margin-left 15px
    & a
      position relative
      display flex
      height 100%
      align-items center
      color $darkgreen
      text-transform uppercase
      transition color 0.23s ease
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
        background $lightergreen
      &:hover:before
        width 100%
        transition 0.404s width ease
        background $lightergreen
      &:hover:after
        width 100%
        background transparent

.headScrollingMenu
  & .scrollingMenu
    background $white
    position absolute
    width max-content
    display flex
    flex-direction column
    top 70px
    padding 0
    transform translateX(-20px)
    opacity 0
    transition 0.42s opacity ease
    box-shadow $shadow
    z-index -1
    & li
      padding 10px 20px
      margin 0
      &:hover
        background $creamwhite
        & a
          color $lightgreen
      & a:before, a:after
        all inherit
  &:hover .scrollingMenu
    opacity 1
</style>
