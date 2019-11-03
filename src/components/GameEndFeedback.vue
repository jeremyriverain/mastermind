<template>
  <div class="text-center">
    <q-banner inline-actions class="text-white" :class="classStyle">
      {{label}}
    </q-banner>
    <q-banner inline-actions class="solution text-white">
    <div class="flex justify-center items-center q-gutter-sm">
      <div v-for="(color, i) in $store.state.game.combination" :key="i">
        <q-btn :style="'background:' + color" flat round glossy size="0.45rem" />
      </div>
    </div>
    </q-banner>
  </div>
</template>

<script>
export default {
  name: 'GameEndFeedback',
  data () {
    return {}
  },
  computed: {
    classStyle () {
      return this.$store.getters['game/hasWon'] ? 'bg-positive' : 'bg-negative'
    },
    label () {
      return this.$store.getters['game/hasWon'] ? this.$t('you_win') : this.$t('you_lose')
    }
  }
}
</script>

<style lang="stylus" scoped>
.solution
  background: url(./../assets/wood_pattern.png) no-repeat center center fixed;
  background-size: cover;
  box-shadow: 2px 2px 0px #4e342e;
</style>
