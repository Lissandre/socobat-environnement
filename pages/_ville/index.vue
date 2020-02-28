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
