<template>
  <div>
    <Navbar />
    <TopPage />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import TopPage from '@/components/TopPage'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    TopPage,
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
html
  font-family 'Source Sans Pro', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size 16px
  word-spacing 1px

*,
*:before,
*:after
  box-sizing border-box
  margin 0

a
  text-decoration none

.container
  margin 0 10%
</style>
