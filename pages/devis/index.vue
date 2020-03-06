<template>
  <div class="devis">
    <h1>Devis</h1>
    <div class="js-typeform-embed" />
    <!-- <h2>FORMULAIRE</h2>
    <div v-for="(item, index) in form.items" :key="index">
      <h3>Réponse {{ index }} au formulaire</h3>
      <div v-for="(answer, indexa) in item.answers" :key="indexa">
        <p v-if="answer.field.id === 'jSiP8P2kW1eb'">
          Prénom: {{ answer.text }}
        </p>
        <p v-if="answer.field.id === 'H0c5ux7cbMLw'">
          Nom: {{ answer.text }}
        </p>
        <p v-if="answer.field.id === 'PEB3vviFBqGj'">
          Mail: {{ answer.email }}
        </p>
        <p v-if="answer.field.id === 'Tud8q8e9YHfN'">
          Adresse: {{ answer.text }}
        </p>
        <p v-if="answer.field.id === 'fmBNNEcJfAvN'">
          Entreprise: {{ answer.text }}
        </p>
        <p v-if="answer.field.id === 'nxAjtePZUilj'">
          Téléphone: {{ answer.phone_number }}
        </p>
        <p v-if="answer.field.id === 'V2c8a91H7rRO'" class="choices">
          Services demandés: <span v-for="(choice, indexb) in answer.choices.labels" :key="indexb">{{ choice }}</span>
        </p>
      </div>
    </div> -->
    <nuxt-link :to="{name: 'devis-votre_devis'}">
      Lien provisoire
    </nuxt-link>
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
      'https://admin.typeform.com/to/j4BLf5',
      {
        opacity: 0,
        buttonText: 'Answer this!',
        hideScrollbars: true,
        onSubmit: () => {
          // eslint-disable-next-line
          console.log('ok')
        }
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
