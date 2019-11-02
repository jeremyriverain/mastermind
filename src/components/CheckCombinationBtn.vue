<template>
  <div class="text-center">
    <q-btn
      :label="$t('test_combination')"
      glossy
      rounded
      @click="onClick"
      :disable="$store.state.game.activeRow === $store.state.settings.numSteps"
    />
  </div>
</template>

<script>
export default {
  name: 'CheckCombinationBtn',
  computed: {
    combination () {
      return this.$store.state.game.steps[this.activeRow - 1].combination
    },
    activeRow () {
      return this.$store.state.game.activeRow
    },
    canIncrementActiveRow () {
      return true
      // let canIncrement = true
      // for (let i = 0; i < this.combination.length; i++) {
      //   if (!this.combination[i]) {
      //     canIncrement = false
      //     console.log('can\'t increment')
      //   }
      // }
      // return canIncrement
    }
  },
  methods: {
    onClick () {
      if (!this.canIncrementActiveRow) {
        this.$q.notify({
          message: this.$t('notify.incompleteCombination')
        })
        return
      }
      if (this.activeRow < this.$store.state.settings.numSteps) { // this was not the last attempt
        console.log('increment active Row')
        this.$store.commit('mutate', {
          property: 'game.activeRows',
          value: this.$store.state.game.activeRow++
        })
      }
    }
  }
}
</script>
