<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      404 - Page non trouvée
    </h1>
    <h1 v-else>
      Une erreur s'est produite
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus">

</style>
