<template>
  <div class="city">
    <div class="textCity">
      <h1>
        Évacuation et traitement de déchets, location de matériels et diagnostic de pollution des sols à {{ ville }} {{ zip }}
      </h1>
      <p>
        Socobat Environnement sur {{ ville }} {{ zip }} est une société de location de camion benne, d’évacuation et de traitement de déchets à {{ ville }}. Socobat Environnement vous propose une location de matériel de chantier (camion benne, base vie autonome, big bag, etc.), une évacuation de vos déchets de chantier, un transport jusqu’au centre de tri, un diagnostic de pollution du sol, un transport des déchets amiante, etc.
      </p>
      <p>
        Vous souhaitez louer des bases vie autonomes, des big bags, ou des camions bennes ? Vous souhaitez évacuer vos déchets et les amener en centre de tri ? Vous ne savez pas comment transporter vos déchets d’amiante ? Vous avez besoin d’un camion benne muni d’une grue, et d’un chauffeur ? Vous avez besoin d’une étude du sol par forage ?
      </p>
      <p>
        Socobat Environnement {{ ville }} {{ zip }} vous apporte une solution à ces problèmes.
      </p>
      <p>
        Vous avez un chantier sur {{ ville }} et vous cherchez une société spécialisée dans la gestion des déchets, la gestion de l’amiante, la location de matériels et l’étude du sol ?
      </p>
      <p>
        Socobat Environnement sur {{ ville }} {{ zip }} s’occupe de tous vos déchets de chantier, vous loue le matériel nécessaire pour vos ouvriers, sur {{ ville }}.
      </p>
      <p>
        Comment cela se passe pour une évacuation de vos déchets, une location, une étude du sol sur {{ ville }} {{ zip }} ?
        Vous pouvez répondre à <nuxt-link to="demande-de-devis">
          ce questionnaire
        </nuxt-link> afin d’établir un devis transparent et pour nous permettre de vous contacter et de vous fournir les services demandés sur {{ ville }} {{ zip }}.
      </p>
      <p>
        Nous vous indiquons un prix HT et TTC pour l’évacuation des déchets, la location de camions bennes, avec ou sans grue et chauffeur, la location de bases vie autonomes, la location de big bags, une étude du sol par forage, une évacuation et un traitement des déchets amiante sur {{ ville }}. Vous décidez ou non de prendre rendez-vous pour ces services sur {{ ville }} {{ zip }}.
      </p>
      <p>
        Demandez votre devis pour les services dont vous avez besoin sur {{ ville }} {{ zip }}?
      </p>
    </div>
    <div class="list">
      <p>
        Socobat Environnement intervient sur {{ ville }} {{ zip }} pour l’évacuation des déchets, la location de camions bennes, avec ou sans grue et chauffeur, la location de bases vie autonomes, la location de big bags, une étude du sol par forage, une évacuation et un traitement des déchets amiante, mais également dans toutes les villes d'Ile de France:
      </p>
      <CitiesList />
    </div>
    <div class="map">
      <iframe
        v-resize="{ log: true }"
        :src="'https://maps.google.com/maps?q=' + ville + '&amp;output=embed'"
        width="45%"
        height="50%"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
      />
    </div>
  </div>
</template>

<script>
import CitiesList from '@/components/CitiesList'
export default {
  components: {
    CitiesList
  },
  validate ({ params, store }) {
    let response
    store.state.deps.forEach((dep) => {
      store.state.cities[dep.zip].forEach((city) => {
        if (city.name === params.ville) {
          response = true
        }
      })
    })
    return response
  },
  asyncData ({ route, params, store }) {
    let zip
    store.state.deps.forEach((dep) => {
      store.state.cities[dep.zip].forEach((city) => {
        if (city.name === params.ville) {
          zip = city.zip
        }
      })
    })
    return {
      ville: route.params.ville,
      zip
    }
  },
  data () {
    return {
      zip: ''
    }
  },
  head () {
    return {
      title: 'Socobat Environnement - ' + this.ville + ' - Spécialiste traitement des déchets en île de France',
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: 'description',
          name: 'description',
          content: 'Évacuation des déchets, location de matériels, analyses des sols, faites confiance à Socobat Environnement dans la gestion de vos déchets de chantier à ' + this.ville + '.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.textCity
  & p
    margin-bottom 2%
    width 45%
    font-size 20px
  & h1
    margin-bottom 5%
    width 80%
.map
  position absolute
  width 40%
  height 50%
  top 30%
  right 10%
  & iframe
    width 100%
    height 100%

.list
  margin-top 10%
  margin-bottom 5%
  & p
    margin-bottom 2%

@media screen and (max-width: 840px)
  iframe
    display none
  .textCity
    padding-top 15%
    & p, & h1
      width 100%
</style>
