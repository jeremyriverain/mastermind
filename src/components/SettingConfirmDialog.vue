<template>
  <q-dialog
    persistent
    :value="show"
    @hide="$emit('cancel')"
  >
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">{{$t('submit_confirm')}}</span>
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
          @click="$emit('submit')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>
