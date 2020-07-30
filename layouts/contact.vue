<template>
  <div class="contactPage">
    <Navbar />
    <div class="containerContact">
      <nuxt />
      <iframe
        id="frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.105719237943!2d2.420433308611232!3d48.90536177455487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66cef8dd7c8d3%3A0x97e3ee691454dad6!2s18%20Rue%20Albert%20Einstein%2C%2093000%20Bobigny!5e0!3m2!1sfr!2sfr!4v1584353150767!5m2!1sfr!2sfr"
        frameborder="0"
        style="border:0;"
      />
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
.contactPage
  min-height calc(var(--vh, 1vh) * 100)
  & .containerContact
    height calc(var(--vh, 1vh) * 100)
    & iframe
      position absolute
      right 0
      top 0
      height 100%
      width 50%

@media screen and (max-width: 840px)
  .containerContact
    width 100%
    height 100%
    display flex
    flex-direction column
    margin-top 10%
    & iframe#frame
      position inherit
      margin 0 auto
      height 50%
      width 90%

@media screen and (max-width: 420px)
  .containerContact
    width 100%
    height 100%
    display flex
    flex-direction column
    & iframe#frame
      position inherit
      height 40%
      width 90%
</style>
