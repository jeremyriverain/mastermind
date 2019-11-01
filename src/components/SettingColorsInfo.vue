<template>
  <div>
    <q-btn
      icon="help"
      round
      flat
      text-color="primary"
      @click="showDialog = true"
    />
    <q-dialog v-model="showDialog">
      <q-card>

        <q-card-section>
          {{$t('colors_help_message')}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
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
  }
}
</script>
