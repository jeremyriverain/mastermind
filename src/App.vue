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
    }

    console.log(lang)
    this.setLocale(lang)
  }
}
</script>
