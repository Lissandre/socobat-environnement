<template>
  <div class="tri">
    <h1>
      Centre de tri
    </h1>
    <div class="triList">
      <p>
        <span>Horaires des bureaux</span>
        <span class="sub">9h - 18h.</span>
      </p>
      <p>
        <span>Horaires du centre</span>
        <span class="sub">7h - 17h.</span>
      </p>
      <p>
        <span>Les déchets acceptés</span>
        <span class="sub">Vrac, Gravats, Bois, Métaux, Cartons & emballages, Autres types (terre, amiante, plomb)</span>
      </p>
      <p>
        <span>Les documents à apporter pour récupération des déchets d'amiante</span>
        <span class="sub">BDSA (Bordereau de suivi des déchets d'amiante).</span>
      </p>
      <p>
        <span>Adresse</span>
        <a href="https://goo.gl/maps/GsUf3qMZ99B6mPTX7" target="_blank" rel="noopener noreferrer">18 rue Albert Einstein à Bobigny (93000)</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Socobat Environnement - Centre de tri - Spécialiste traitement des déchets en île de France',
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: 'description',
          name: 'description',
          content: 'Besoin de faire évacuer vos déchets de chantier ? Prenez connaissance des informations nécessaire sur notre centre de tri.'
        }
      ]
    }
  },
  layout: 'centre-tri'
}
</script>

<style lang="stylus">
.tri
  padding-top 6%
  position absolute
  left 0
  width 50%
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
.triList
  & p
    margin 5% auto
    text-align center
    font-size 20px
    & span
      display block
      margin-bottom 2%
    & a, .sub
      color $green
    & a:hover
      color $lightgreen

@media screen and (max-width: 840px)
  .tri
    position inherit
    width 100%
    height auto
    & h1
      visibility hidden
    & .triList p
      & span
        font-size 18px
        font-weight normal
      & a, .sub
        font-size 20px

@media screen and (max-width: 420px)
  .tri
      height 100%
      padding 0 5%
</style>
