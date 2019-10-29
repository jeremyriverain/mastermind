<template>

  <div>
    <q-btn
      flat
      round
      dense
      color="black"
      icon="refresh"
      @click="showDialog = true"
    />
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
            color="primary"
          />
          <q-btn
            flat
            :label="$t('confirm')"
            v-close-popup
            @click="reload"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
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
