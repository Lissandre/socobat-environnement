<template>
  <p class="citiesList">
    <span v-for="(ville, index) in villes" :key="index">
      <nuxt-link :to="{ name: 'ville', params: { ville: ville.name }}">
        {{ ville.name }} ({{ ville.zip }})
      </nuxt-link>
    </span>
  </p>
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
.citiesList
  text-align center
  & span:not(:last-child)::after
    content '-'
</style>
