<template>
  <div class="topPage">
    <h1>
      Socobat Environnement
      <span>
        Mettez vos déchets au vert
      </span>
    </h1>
    <AskDevis />
    <div class="scrollIndicator" @click="scrollClick()">
      En savoir plus
      <img src="@/assets/images/chevron-down.svg" alt="chevron down svg">
    </div>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
import AskDevis from '@/components/AskDevis'
export default {
  components: {
    AskDevis
  },
  methods: {
    scrollClick () {
      animateScrollTo(window.innerHeight - document.querySelector('#nav').offsetHeight)
    }
  }
}
</script>

<style lang="stylus">
.topPage
  background linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('~assets/images/socobat-environnement-bobigny-bennes-traitement-dechet-93.jpg')
  background-size cover
  background-position center center
  width 100%
  height calc(var(--vh, 1vh) * 100)
  display flex
  justify-content center
  align-items center
  flex-direction column
  color $white
  & h1
    font-size 64px
    font-weight bold
    text-transform uppercase
    text-align center
    & span
      display block
      font-size 48px
      font-weight lighter
  & .devisButton
    width auto
    position absolute
    bottom 25%

.scrollIndicator
  position absolute
  bottom 5%
  display flex
  flex-direction column
  cursor pointer

@media screen and (max-width: 840px)
  .topPage
    padding 0 10%
    box-sizing border-box
    & h1
      font-size 40px
      & span
        margin-top 5%
        font-size 28px
    & .devisButton
      bottom 16%
</style>
