<template>
  <q-tab
    icon="refresh"
    @click="showDialog = true"
    :label="$q.platform.is.mobile ? false : $t('restart')"
  >
    <q-dialog
      v-model="showDialog"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">{{$t('reload_confirm')}}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            :label="$t('cancel')"
            v-close-popup
          />
          <q-btn
            flat
            :label="$t('confirm')"
            color="primary"
            v-close-popup
            @click="reload"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-tab>

</template>

<script>
export default {
  name: 'TheFooterRestartBtn',
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    reload () {
      this.$store.commit('game/reset')
    }
  }
}
</script>
