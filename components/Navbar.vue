<template>
  <nav id="nav" class="nav" :class="this.$route.name === 'index' ? 'transp' : 'white'">
    <div class="logo">
      <nuxt-link to="/">
        <img src="@/assets/images/logo_socobat_environnement.svg" alt="Logo Socobat Environnement SVG">
      </nuxt-link>
    </div>
    <div class="hamburgerButton" @click="changeMenu()">
      <svg
        v-if="!menu"
        :class="this.$route.name === 'index' ? 'white' : 'black'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-menu"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <svg
        v-if="menu"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      ><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
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
        <nuxt-link :to="{name: 'contact'}">
          Contact
        </nuxt-link>
      </li>
      <li @click="closeMenu()">
        <nuxt-link :to="{name: 'demande-de-devis'}">
          Votre devis
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
  // eslint-disable-next-line
  mounted: function () {
    if (this.$route.name === 'index') {
      const nav = document.querySelector('nav')
      const menu = document.querySelector('.feather-menu')
      window.addEventListener('scroll', function () {
        if (scrollY > 0) { nav.classList.add('white'); nav.classList.remove('transp'); if (menu.classList.contains('white')) { menu.classList.remove('white'); menu.classList.add('black') } } else if (scrollY === 0) { nav.classList.add('transp'); nav.classList.remove('white'); if (!menu.classList.contains('white')) { menu.classList.remove('black'); menu.classList.add('white') } }
      })
    }
  },
  methods: {
    changeMenu () {
      this.menu = !this.menu
      document.querySelector('body').classList.toggle('freeze')
    },
    closeMenu () {
      if (this.menu === true) {
        this.menu = false
        document.querySelector('body').classList.toggle('freeze')
      }
    }
  }
}
</script>

<style lang="stylus">
.nav
  position fixed
  top 0
  width 100%
  height 100px
  padding 0 5%
  display flex
  justify-content space-between
  align-items center
  z-index 2
  transition 0.52s background ease, 0.32s box-shadow ease
  font-size 16px !important
  &.white
    background $white
    box-shadow $shadow
  &.transp a
    color $white

.logo a img
  height 40px

.hamburgerButton
  display none
  cursor pointer
  & svg
    height 100%
    &.white
      color #fff
    &.black
      color #000

.linksList
  // background $white
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
      color $green
      text-transform uppercase
      font-size 16px !important
      &:hover
        transition color 0.23s ease
        color $lightergreen
    &:last-child a
      background $green
      height auto
      padding 12px 20px
      color $white
      transition 0.3s transform ease
      font-size 16px !important
      &:hover
        transform scale(0.95)

@media screen and (max-width: 840px)
  .freeze
    overflow hidden

  .hamburgerButton
    display block
    height 36%
    & img
      height 100%
      // width 100%

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
    background $white
    &.open
      transform translateX(0)
    & li
      font-size 24px
      font-weight bold
      text-align center
      &:not(:first-child)
        margin-left 0px
      & a
        color $green

  .nav.transp a
    color $green
</style>
