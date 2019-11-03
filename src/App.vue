<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import setLocaleMixin from 'mixins/setLocaleMixin'
export default {
  name: 'App',
  mixins: [
    setLocaleMixin
  ],
  mounted () {
    let lang = this.$store.state.settings.locale

    if (!lang) {
      lang = this.$q.lang.getLocale() === 'fr' ? 'fr' : 'en-us'
      console.log(lang)
      this.setLocale(lang)
      this.$store.commit('mutate', {
        property: 'settings.locale',
        value: lang
      })
    }

    if (!this.$store.getters['game/isPlaying'] && (!this.$store.getters['game/hasWon'] && !this.$store.getters['game/hasLost'])) {
      this.$store.dispatch('game/initResultCombination')
    }
  }
}
</script>
