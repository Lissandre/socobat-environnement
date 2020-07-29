<template lang="">
  <div class="centrePage">
    <Navbar />
    <div class="containerCentreTri">
      <iframe
        id="frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.105719237943!2d2.420433308611232!3d48.90536177455487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66cef8dd7c8d3%3A0x97e3ee691454dad6!2s18%20Rue%20Albert%20Einstein%2C%2093000%20Bobigny!5e0!3m2!1sfr!2sfr!4v1584353150767!5m2!1sfr!2sfr"
        width="50%"
        height="100%"
        frameborder="0"
        style="border:0;"
      />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
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
.centrePage
  height calc(var(--vh, 1vh) * 100)
  & iframe
    position fixed
    right 0
    height 100%
    width 50%

.centrePage .footer
  position fixed
  bottom 0

@media screen and (max-width: 840px)
  .containerCentreTri
    width 100%
    height 100%
    display flex
    flex-direction column
    & iframe
      position inherit
      height 50%
      width 100%

@media screen and (max-width: 420px)
  .centrePage iframe
    display none
</style>
