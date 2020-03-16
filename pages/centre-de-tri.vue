<template>
  <div class="tri">
    <h1>
      Centre de tri
    </h1>
    <div class="geo">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.105719237943!2d2.420433308611232!3d48.90536177455487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66cef8dd7c8d3%3A0x97e3ee691454dad6!2s18%20Rue%20Albert%20Einstein%2C%2093000%20Bobigny!5e0!3m2!1sfr!2sfr!4v1584353150767!5m2!1sfr!2sfr"
        width="800"
        height="600"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
      <a href="https://goo.gl/maps/GsUf3qMZ99B6mPTX7" target="_blank" rel="noopener noreferrer">18 rue Albert Einstein à Bobigny (93000)</a>
    </div>
    <h3>
      Horaires
    </h3>
    <p>
      Du lundi au dimanche de 9h à 19h.
    </p>
    <h3>
      Les déchets acceptés
    </h3>
    <p>
      Petite liste des déchets
    </p>
    <h3>
      Les documents à apporter
    </h3>
    <p>
      Petite liste des documents importants
    </p>
    <h3>
      Le centre
    </h3>
    <p>
      Le centre de tri de Bobigny (93000) permet aux entreprises des villes environnentes d'apporter leurs différents déchets afin de les trier et de leur offrir une seconde vie.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.tri
  & h1
    margin-bottom 32px
  & .geo
    display flex
    flex-direction column
  & h3
    margin-top 32px
</style>
