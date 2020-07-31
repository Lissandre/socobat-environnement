<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="contactList">
      <p>
        <span>
          Vous voulez nous passer un coup de fil ?
        </span>
        <a href="tel:+33184740485">01 84 74 04 85</a>
      </p>
      <p>
        <span>
          Vous avez besoin de nous envoyer un mail ?
        </span>
        <a href="mailto:contact@socobat-environnement.fr">contact@socobat-environnement.fr</a>
      </p>
      <p>
        <span>
          Socobat Environnement
        </span>
        <a href="https://goo.gl/maps/GsUf3qMZ99B6mPTX7" target="_blank" rel="noopener noreferrer">18 rue Albert Einstein à Bobigny (93000)</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'contact',
  head () {
    return {
      title: 'Socobat Environnement - Contactez-nous',
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: 'description',
          name: 'description',
          content: 'Page de contact de Socobat Environnement.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.contact
  position absolute
  left 0
  width 50%
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
.contactList
  & p
    margin 10% auto
    text-align center
    font-size 20px
    & span
      display block
      margin-bottom 2%
    & a
      color $green
      &:hover
        color $lightgreen

@media screen and (max-width: 840px)
  .contact
    margin-top 16%
    position inherit
    width 100%
    height auto
    & h1
      visibility hidden
    & .contactList p
      & span
        font-size 18px
        font-weight normal
      & a
        font-size 20px

@media screen and (max-width: 420px)
  .contact
      padding 0 5%
</style>
