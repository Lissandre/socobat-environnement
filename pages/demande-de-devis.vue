<template>
  <div class="devis main">
    <div class="js-typeform-embed" />
  </div>
</template>

<script>
import * as typeformEmbed from '@typeform/embed'
export default {
  mounted: () => {
    const typeform = document.querySelector('.js-typeform-embed')
    typeformEmbed.makeWidget(
      typeform,
      'https://ao-solutions.typeform.com/to/MKAMZl',
      {
        hideFooter: true,
        hideHeaders: true,
        hideScrollbars: true
      }
    )
    typeform.querySelector('div').style.height = '100%'

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
.devis
  height calc(var(--vh, 1vh) * 96)

.js-typeform-embed
  height 90%
  border 1px solid red
</style>
