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
  min-height calc(var(--vh, 1vh) * 100)
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
</style>
