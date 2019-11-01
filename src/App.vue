<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import bus from 'src/boot/bus'
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
    }

    console.log(lang)
    this.setLocale(lang)
    this.$store.commit('mutate', {
      property: 'settings.locale',
      value: lang
    })

    this.initResultCombination()

    bus.$on('gameReset', () => {
      console.log('game reset')
      this.initResultCombination()
    })
  },
  methods: {
    initResultCombination () {
      let combination = []
      let settingsStore = this.$store.state.settings
      for (let i = 0; i < settingsStore.numBoxes; i++) {
        combination.push(settingsStore.colors[Math.floor(Math.random() * settingsStore.colors.length)])
      }

      console.log('result', combination)

      this.$store.commit('mutate', {
        property: 'game.combination',
        value: combination
      })
    }
  }
}
</script>
