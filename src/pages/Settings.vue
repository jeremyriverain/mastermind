<template>
  <q-page padding>
    <div class="row justify-center col-12">
      <div class="col-10 col-sm-6 col-md-4 col-lg-3">
        <form
          @submit.prevent="submit"
          class="justify-center row "
          novalidate
        >

          <div class="col-12">
            <h2 class="text-h5 text-center">{{$t('general_setting')}}</h2>

            <select-locale
              :value="form.locale"
              @input="form.locale = $event"
            ></select-locale>

            <h2 class="text-h5 text-center q-mt-xl">{{$t('game_setting')}}</h2>
            <div>

              <p>

                {{$t('numSteps')}}
              </p>
              <q-slider
                v-model="form.numSteps"
                :min="6"
                :max="12"
                :step="1"
                snap
                label
                label-always
                color="black"
                markers
              />
            </div>

            <div class="q-mt-md">
              <label>{{$t('numBoxes')}}
                <q-option-group
                  v-model="form.numBoxes"
                  :options="boxesOptions"
                  color="black"
                  inline
                />
              </label>
            </div>

            <div class="q-mt-md">
              <label>{{$t('numColors')}}
                <q-option-group
                  v-model="form.numColors"
                  :options="colorsOptions"
                  color="black"
                  inline
                />
              </label>
            </div>

            <setting-confirm-dialog
              :show="showConfirmDialog"
              v-if="canOpenConfirmDialog"
              @cancel="showConfirmDialog = false"
              @submit="confirmSubmit"
            ></setting-confirm-dialog>
            <q-btn
              :label="$t('submit')"
              class="full-width q-mt-lg"
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
  name: 'Settings',
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
      },
      boxesOptions: [
        {
          label: '4',
          value: 4
        },
        {
          label: '5',
          value: 5
        }
      ],
      colorsOptions: [
        {
          label: '5',
          value: 5
        },
        {
          label: '6',
          value: 6
        }
      ]
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
