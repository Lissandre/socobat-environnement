<template>
  <div class="devis">
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
  },
  head () {
    return {
      title: 'Socobat Environnement - Demande de devis - Spécialiste traitement des déchets en île de France',
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: 'description',
          name: 'description',
          content: 'Socobat Environnement vous propose une location de matériels, une évacuation de vos déchets et des analyses de sols. Demandez votre devis pour faire appel à nos services.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.devis
  height calc(var(--vh, 1vh) * 96)

.js-typeform-embed
  height 90%
</style>
