<template>
  <div class="home">
    <h1>Accueil</h1>
    <h2>Ou intervenons-nous ?</h2>
    <p>
      <span v-for="(ville, index) in villes" :key="index">
        <nuxt-link :to="{ name: 'ville', params: { ville: ville.name }}">
          {{ ville.name }}
        </nuxt-link>
        ({{ ville.zip }})
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      villes: this.$store.state.cities
    }
  }
}
</script>

<style lang="stylus">
.home
  background #fff
</style>
