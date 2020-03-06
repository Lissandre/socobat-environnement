<template>
  <div class="topPage">
    <h1>
      Socobat Environnement
      <span>
        Mettez vos déchets au vert
      </span>
    </h1>
    <AskDevis />
    <div class="scrollIndicator">
      En savoir plus
      <img src="@/assets/images/chevron-down.svg" alt="chevron down svg">
    </div>
  </div>
</template>

<script>
import AskDevis from '@/components/AskDevis'
export default {
  components: {
    AskDevis
  }
}
</script>

<style lang="stylus">
.topPage
  background $grey
  width 100%
  height calc(var(--vh, 1vh) * 100)
  display flex
  justify-content center
  align-items center
  flex-direction column
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
    position absolute
    bottom 25%

.scrollIndicator
  position absolute
  bottom 5%
  display flex
  flex-direction column

@media screen and (max-width: 840px)
  .topPage
    padding 0 10%
    box-sizing border-box
    & h1
      font-size 46px
      & span
        margin-top 5%
        font-size 34px
    & .devisButton
      bottom 20%
</style>
