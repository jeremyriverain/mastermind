<template>
  <q-page padding>
    <div class="row justify-center col-12 q-mb-lg">
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
                :min="3"
                :max="12"
                :step="1"
                snap
                label
                label-always
                color="black"
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

            <setting-colors
              class="q-mt-md"
              :colors="form.colors"
              @input="form.colors = $event"
            >
              <template
                v-slot:error
                v-if="colorsNotUnique"
              >
                <q-banner class="bg-negative text-white q-mb-md">
                  {{$t('validators.colorsNotUnique')}}
                </q-banner>
              </template>

            </setting-colors>

            <setting-confirm-dialog
              :show="showConfirmDialog"
              v-if="canOpenConfirmDialog"
              @cancel="showConfirmDialog = false"
              @submit="confirmSubmit"
            ></setting-confirm-dialog>
            <q-btn
              :label="$t('submit')"
              class=" q-mt-lg"
              glossy
              outline
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
import SettingColors from 'components/SettingColors'
import SettingConfirmDialog from 'components/SettingConfirmDialog'
import setLocaleMixin from 'mixins/setLocaleMixin'
import { cloneDeep } from 'lodash'

export default {
  name: 'Settings',
  components: {
    SelectLocale,
    SettingColors,
    SettingConfirmDialog
  },
  mixins: [
    setLocaleMixin
  ],
  data () {
    return {
      secondColor: '#027be3',
      cupcake: true,
      showConfirmDialog: false,
      hasConfirmed: false,
      form: {
      },
      colorsNotUnique: false,
      boxesOptions: [
        {
          label: '3',
          value: 3
        },
        {
          label: '4',
          value: 4
        },
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
      return this.$store.getters['game/isPlaying']
    }
  },
  methods: {
    submit () {
      if (!this.isColorsUnique()) {
        this.colorsNotUnique = true
        console.log('invalid')
        this.$q.notify({
          message: this.$t('notify.formNotValid'),
          color: 'warning',
          textColor: 'black'
        })
      } else {
        if (this.canOpenConfirmDialog && !this.hasConfirmed) {
          this.showConfirmDialog = true
        } else {
          console.log('submitting')
          this.$store.commit('mutate', {
            property: 'settings',
            value: this.form
          })

          this.setLocale(this.$store.state.settings.locale)

          this.$store.commit('game/reset')

          this.$q.notify({
            message: this.$t('notify.settingsSaved')
          })

          this.colorsNotUnique = false
          this.$router.push('/')
        }
      }
    },
    isColorsUnique () {
      return (new Set(this.form.colors)).size === this.form.colors.length
    },
    confirmSubmit () {
      this.showConfirmDialog = false
      this.hasConfirmed = true
      this.submit()
    }
  },
  created () {
    this.form = cloneDeep(this.$store.state.settings)
  }
}
</script>
