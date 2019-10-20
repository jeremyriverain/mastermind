export default {
  methods: {
    setLocale (lang) {
      this.$i18n.locale = lang

      import(`quasar/lang/${lang}`).then(lang => {
        this.$q.lang.set(lang.default)
      })
    }
  }
}
