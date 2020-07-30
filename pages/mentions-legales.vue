<template>
  <div class="legal">
    <div class="texteConfidentialite">
      <h1>
        Mentions Légales
      </h1>
      <h3>
        Présentation du site
      </h3>
      <p>
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.socobat-environnement.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
      </p>
      <p>
        Propriétaire du site : SOCOBAT ENVIRONNEMENT <br>
        SAS au capital de 1 000,00 €, immatriculée au numéros RCS 878 780 328 de Bobigny. <br>
        SIRET : 879 780 328 00016 <br>
        Adresse du siège social : 47 RUE DE LA FERME 93100 MONTREUIL
      </p>
      <p>
        Responsable publication : SOCOBAT ENVIRONNEMENT – <a href="mailto:contact@socobat-environnement.fr">contact@socobat-environnement.fr</a> <br>
        Le responsable publication est une personne morale. <br>
        Webmaster : TATCHI – contact@tatchi.fr <br>
        Hébergeur : OVH – 2 Rue Kellermann 59100 ROUBAIX
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.legal
  background #fff
  display flex
  justify-content center
  padding-top 4%

.texteConfidentialite
  width 650px
  max-width 100%
p
  margin-bottom 30px
  text-align justify
  font-size 20px
ul
  list-style inside
  margin 10px 0
  font-size 20px
h3
  font-size 24px
h4
  font-size 22px
  margin-bottom 12px

@media screen and (max-width: 840px)
  .legal
    padding-top 20%
</style>
