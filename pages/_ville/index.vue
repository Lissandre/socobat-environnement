<template>
  <div class="city">
    {{ ville }} est une belle ville.
  </div>
</template>

<script>
export default {
  asyncData ($route) {
    return {
      ville: $route.params.ville
    }
  },
  validate ({ params }) {
    const tab = [
      'Aubervilliers',
      'Aulnay-sous-Bois',
      'Bagnolet',
      'Bobigny',
      'Bondy',
      'Clichy-sous-Bois',
      'Coubron',
      'Drancy',
      'Dugny',
      'Epinay-sur-Seine',
      'Gagny',
      'Gournay-sur-Marne',
      'L\'Ile-Saint-Denis',
      'La Courneuve',
      'Le Blanc-Mesnil',
      'Le Bourget',
      'Le Pré-Saint-Gervais',
      'Le Raincy',
      'Les Lilas',
      'Les Pavillons-sous-Bois',
      'Livry-Gargan',
      'Montfermeil',
      'Montreuil',
      'Neuilly-Plaisance',
      'Neuilly-sur-Marne',
      'Noisy-le-Grand',
      'Noisy-le-Sec',
      'Pantin',
      'Pierrefitte-sur-Seine',
      'Romainville',
      'Rosny-sous-Bois',
      'Saint-Denis',
      'Saint-Ouen-sur-Seine',
      'Sevran',
      'Stains',
      'Tremblay-en-France',
      'Vaujours',
      'Villemomble',
      'Villepinte',
      'Villetaneuse'
    ]
    return tab.includes(params.ville)
  }
}
</script>

<style lang="stylus">
.city
  background #fff
</style>
