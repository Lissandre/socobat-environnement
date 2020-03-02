<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="@/assets/images/logo_socobat_environnement.svg" alt="Logo Socobat Environnement SVG">
      </nuxt-link>
    </div>
    <div class="hamburgerButton" @click="changeMenu()">
      <img v-if="!menu" src="@/assets/images/menu/menu.svg" alt="Icone menu fermé hamburger Socobat Environnement">
      <img v-if="menu" src="@/assets/images/menu/cross.svg" alt="Icone menu ouvert hamburger Socobat Environnement">
    </div>
    <ul class="linksList" :class="{ open: menu }">
      <li @click="closeMenu()">
        <nuxt-link :to="{name: 'index'}">
          Accueil
        </nuxt-link>
      </li>
      <li @click="closeMenu()">
        <nuxt-link :to="{name: 'centre-de-tri'}">
          Centre de tri
        </nuxt-link>
      </li>
      <li @click="closeMenu()">
        <nuxt-link :to="{name: 'devis'}">
          Votre devis
        </nuxt-link>
      </li>
      <li @click="closeMenu()">
        <nuxt-link :to="{name: 'contact'}">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      menu: false
    }
  },
  methods: {
    changeMenu () {
      this.menu = !this.menu
    },
    closeMenu () {
      if (this.menu === true) {
        this.menu = false
      }
    }
  }
}
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
  z-index 2

.logo a img
  height 40px

.hamburgerButton
  display none
  cursor pointer

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
      margin-left 25px
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
      &.nuxt-link-exact-active
        color $lightergreen

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

@media screen and (max-width: 840px)
  .hamburgerButton
    display block

  .linksList
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    padding 40% 0
    z-index -1
    display flex
    flex-direction column
    justify-content center
    align-items center
    transform translateX(100%)
    transition 0.42s transform ease
    &.open
      transform translateX(0)
    & li
      font-size 24px
      font-weight bold
      text-align center
      &:not(:first-child)
        margin-left 0px
</style>
