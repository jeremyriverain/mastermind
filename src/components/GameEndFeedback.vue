<template>
  <div class="text-center">
    <q-card class="bg-grey-9">
      <q-card-section>
        <div class="flex justify-center items-center q-gutter-sm">
          <div v-for="(color, i) in $store.state.game.combination" :key="i">
            <q-btn :style="'background:' + color" round glossy size="0.45rem" />
          </div>
        </div>
            </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  name: 'GameEndFeedback',
  data () {
    return {}
  },
  mounted () {
    if (this.$store.getters['game/hasWon']) {
      this.$q.notify({
        message: this.$t('you_win'),
        color: 'positive',
        textColor: 'white'
      })
    } else {
      this.$q.notify({
        message: this.$t('you_lose'),
        color: 'negative',
        textColor: 'white'
      })
    }
  }
}
</script>
