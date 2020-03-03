<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="contactList">
      <p>
        <span>
          Vous voulez nous passer un coup de fil ?
        </span>
        <a href="tel:+">01 02 03 04 05</a>
      </p>
      <p>
        <span>
          Vous avez besoin de nous envoyer un mail ?
        </span>
        <a href="mailto:">contact@mail.fr</a>
      </p>
      <p>
        <span>
          Socobat Environnement
        </span>
        <a href="https://goo.gl/maps/UHrZ9PbgkEhjLDW3A" target="_blank">47 rue de la Ferme, 93102 Montreuil</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'contact'
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
    & span
      font-weight lighter
      display block
      margin-bottom 2%
    & a
      color $green
      &:hover
        color $lightgreen
</style>
