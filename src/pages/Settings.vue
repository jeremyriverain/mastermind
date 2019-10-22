<template>
  <q-page padding>
    <div class="row justify-center col-12">
      <div class="col-10 col-sm-6 col-md-4 col-lg-3 text-center">
        <form
          @submit.prevent="submit"
          class="justify-center row "
          novalidate
        >

          <div class="col-12">
            <h2 class="text-h5">{{$t('general_setting')}}</h2>

            <select-locale
              :value="form.locale"
              @input="form.locale = $event"
            ></select-locale>

            <h2 class="text-h5">{{$t('game_setting')}}</h2>
            <setting-confirm-dialog
              :show="showConfirmDialog"
              v-if="canOpenConfirmDialog"
              @cancel="showConfirmDialog = false"
              @submit="confirmSubmit"
            ></setting-confirm-dialog>
            <q-btn
              :label="$t('submit')"
              class="full-width"
              glossy
              color="primary"
              type="submit"
            />

          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
import SelectLocale from 'components/SelectLocale'
import SettingConfirmDialog from 'components/SettingConfirmDialog'
import setLocaleMixin from 'mixins/setLocaleMixin'

export default {
  components: {
    SelectLocale,
    SettingConfirmDialog
  },
  mixins: [
    setLocaleMixin
  ],
  data () {
    return {
      showConfirmDialog: false,
      hasConfirmed: false,
      form: {
        locale: null
      }
    }
  },
  computed: {
    canOpenConfirmDialog () {
      return this.$store.state.game.playing
    }
  },
  methods: {
    submit () {
      if (this.canOpenConfirmDialog && !this.hasConfirmed) {
        this.showConfirmDialog = true
      } else {
        console.log('submitting')
        this.$store.commit('mutate', {
          property: 'settings',
          value: this.form
        })

        this.setLocale(this.$store.state.settings.locale)
        this.$q.notify({
          message: this.$t('notify.settingsSaved')
        })
        this.$router.push('/')
      }
    },
    confirmSubmit () {
      this.showConfirmDialog = false
      this.hasConfirmed = true
      this.submit()
    }
  },
  mounted () {
    this.form = Object.assign({}, this.$store.state.settings)
  }
}
</script>
