<template>
  <div class="home">
    <h2>Nos services</h2>
    <div class="services">
      <div class="service">
        <img src="@/assets/images/placeholder.png" alt="">
        <span>
          Évacuation des déchets
        </span>
      </div>
      <div class="service">
        <img src="@/assets/images/placeholder.png" alt="">
        <span>
          Location de matériels
        </span>
      </div>
      <div class="service">
        <img src="@/assets/images/placeholder.png" alt="">
        <span>
          Dépôt des déchets
        </span>
      </div>
      <div class="service">
        <img src="@/assets/images/placeholder.png" alt="">
        <span>
          Diagnostic de pollution
        </span>
      </div>
    </div>
    <div class="bloc">
      <img src="@/assets/images/placeholder.png" alt="">
      <div class="text">
        <p>
          Besoin d’évacuer ou de traiter vos déchets ? Besoin d’un diagnostic de pollution du sol ? Besoin de matériel pour rassembler vos déchets de chantier ? Socobat Environnement est spécialisé dans l’évacuation et le dépot de vos déchets de chantier. Nous vous proposons la location de matériel et des prestations clé en main pour la gestion de vos déchets, dans tout le département de la Seine-saint-Denis (93). <br>
          Socobat Environnement est la solution à tous vos problèmes de déchets de chantier à prix transparent. <br>
          Notre société de gestion des déchets vous propose une aide à l’évacuation des déchets, la location de matériels (big bags, camions bennes, bases vie autonome, etc.), le dépot des déchets dans notre centre de tri, et un diagnostic de pollution du sol par forage.
        </p>
      </div>
    </div>
    <AskDevis />
    <div class="bloc">
      <img src="@/assets/images/placeholder.png" alt="">
      <div class="text">
        <h2>
          Qui sommes-nous ?
        </h2>
        <p>
          Socobat Environnement est une filliale du groupe SOCOBAT, une entreprise spécialisée dans le management des déchets à risques, le désamiantage et les solutions techniques dans les projets d’ingenierie civile. Socobat Environnement, spécialisé dans la gestion des déchets de chantier intervient dans tout le département de la Seine-saint-Denis (93). Nous proposons les services suivants: Évacuation de déchets ou gravas, location de Big Bags, bennes et récupération sur site, location de bases vie autonomes, étude de sol par forage, dépot de déchets dans un centre de tri, location de camion benne avec grue + chauffeur (à l’heure), transport des déchets amiante de votre chantier ou dépot jusqu’au centre de traitement.
        </p>
      </div>
    </div>
    <div class="bloc">
      <img src="@/assets/images/placeholder.png" alt="">
      <div class="text">
        <h2>
          Votre devis
        </h2>
        <p>
          Comment notre système fonctionne ? <br>
          Nos prix sont entièrement transparents. En cliquant sur l’onglet “Devis”, vous êtes amené à sélectionner les services que vous nous demandez, puis un devis sera automatiquement généré avec le prix que cette prestation vous côuterait. Il ne reste plus qu'à nous contacter si notre proposition vous convient, et nous nous chargeons du reste ! La création d’un devis est entièrement gratuite et transparente.
        </p>
      </div>
    </div>
    <AskDevis />
    <p class="servicesList">
      Évacuation, transport et traitement des déchets, analyse de pollution des sols, ou location de bases vie autonomes; Socobat Environnement dispose de tous les matériels nécessaires pour le bon déroulement de vos chantier.
    </p>
    <CitiesList />
  </div>
</template>

<script>
import AskDevis from '@/components/AskDevis'
import CitiesList from '@/components/CitiesList'
export default {
  layout: 'home',
  components: {
    AskDevis,
    CitiesList
  }
}
</script>

<style lang="stylus">
.services
  display flex
  justify-content space-between
  & .service
    width 16%
    text-align center
    & img
      width 100%
      border-radius 50%

.bloc
  display flex
  align-items center
  justify-content space-between
  width 100%
  & .text, img
    width 45%

.servicesList
  width 35%
  margin 5% auto 2% auto
  text-align center
</style>
