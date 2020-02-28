<template>
  <div class="city">
    Dpann PC {{ ville }} est une société de réparation d'ordinateur à {{ ville }} qui est spécialisé dans l'assistance, la formation et le dépannage informatique sur {{ ville }}. Dépannage ordinateur, installation, réparation, configuration, maintenance, conseil ...
    <br>
    Vous rencontrez des soucis informatiques à {{ ville }} ? Votre ordinateur est devenu lent et vous êtes assailli de publicités douteuses ? Une page bloque l'accès à votre PC vous demandant de payer pour pouvoir le débloquer ? Vous pensez avoir un virus ou des logiciels malveillants sur votre PC ? Votre ordinateur ne démarre plus ou il s’essouffle ? Votre réseau ne répond plus ? Vous avez un problème d'installation ou de connexion sur internet ? Vous manquez d'expérience et avez besoin de formation ?
    <br>
    Dpann PC {{ ville }} vous apporte une solution à tous vos problèmes informatiques.
  </div>
</template>

<script>
export default {
  asyncData ($route) {
    return {
      ville: $route.params.ville
    }
  },
  validate ({ params, store }) {
    let response
    store.state.cities.forEach((city) => {
      if (city.name === params.ville) {
        response = true
      }
    })
    return response
  }
}
</script>

<style lang="stylus">
.city
  background #fff
</style>
