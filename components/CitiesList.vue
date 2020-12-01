<template>
  <div>
    <div v-for="(dep, key) in deps" :key="key" class="citiesList">
      <h3>{{ dep.zip }} - {{ dep.name }}</h3>
      <p class="hideP">
        <span v-for="(ville, index) in villes[dep.zip]" :key="index">
          <nuxt-link :to="{ name: 'ville', params: { ville: ville.name }}">
            {{ ville.name }} ({{ ville.zip }})
          </nuxt-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deps: this.$store.state.deps,
      villes: this.$store.state.cities
    }
  },
  mounted () {
    this.title = document.querySelectorAll('.citiesList h3')
    this.par = document.querySelectorAll('.citiesList p')
    this.deps.forEach((dep, index) => {
      this.title[index].addEventListener('click', (e) => {
        this.par[index].classList.toggle('hideP')
      })
    })
  }
}
</script>

<style lang="stylus">
.citiesList
  & p
    text-align center
    font-size 11px
    & span:not(:last-child)::after
      content '-'
  & h3
    text-align: center;
    font-size: 13px;
    cursor: pointer;

.hideP
  display none
</style>
