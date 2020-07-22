<template lang="">
  <div class="contactPage">
    <Navbar />
    <div class="containerContact">
      <nuxt />
      <iframe
        id="frame"
        v-resize="{ log: true }"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4514189644547!2d2.451142815856943!3d48.86867040793652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d4c0ee1a94f%3A0xe1ff0bd6cca81a1!2s47%20Rue%20de%20la%20Ferme%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1583228419081!5m2!1sfr!2sfr"
        width="50%"
        height="100%"
        frameborder="0"
        style="border:0;"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  mounted: () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style lang="stylus">
.contactPage
  height calc(var(--vh, 1vh) * 100)
  & iframe
    position fixed
    right 0
    height 100%
    width 50%

@media screen and (max-width: 840px)
  .containerContact
    width 100%
    height 100%
    display flex
    flex-direction column
    & iframe
      position inherit
      height 50%
      width 100%

@media screen and (max-width: 420px)
  .contactPage iframe
    display none
</style>
