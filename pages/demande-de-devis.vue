<template>
  <div class="devis">
    <div class="js-typeform-embed" />
  </div>
</template>

<script>
import * as typeformEmbed from '@typeform/embed'
export default {
  async asyncData ({ $axios }) {
    $axios.setToken('HYqKJuaY6eNjL9CDvi3e5gcTjsJwLQnsj1y4KCYEzAhD', 'Bearer')
    const form = (await $axios.get('api/forms/j4BLf5/responses')).data

    return { form }
  },
  mounted: () => {
    const embedElement = document.querySelector('.js-typeform-embed')
    typeformEmbed.makeWidget(
      embedElement,
      'https://ao-solutions.typeform.com/to/MKAMZl',
      {
        opacity: 0,
        buttonText: 'Answer this!',
        hideScrollbars: true,
        onSubmit: () => {}
      }
    )
  }
}
</script>

<style lang="stylus">
.devis
  background #fff

.choices
  & span:not(:last-child)::after
    content ','
  & span:not(:first-child)::before
    content ' '

h3
  margin-top 5%
  margin-bottom 1%

.js-typeform-embed
  height 75vh

button
  padding 1% 5%
</style>
