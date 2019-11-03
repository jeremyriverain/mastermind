<template>
  <div class="text-center">
    <q-btn
      :label="$t('test_combination')"
      glossy
      rounded
      @click="onClick"
      :disable="$store.getters['game/hasWon'] || $store.getters['game/hasLost']"
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
    allColorsFilled () {
      let canIncrement = true
      for (let i = 0; i < this.combination.length; i++) {
        if (!this.combination[i]) {
          canIncrement = false
          console.log('can\'t increment')
        }
      }
      return canIncrement
    }
  },
  methods: {
    onClick () {
      if (!this.allColorsFilled) {
        this.$q.notify({
          message: this.$t('notify.incompleteCombination')
        })
        return
      }

       this.$store.commit('mutate', {
         property: 'game.steps[' + (this.activeRow - 1) + '].feedback',
         value: true
       })

      if (!this.$store.getters['game/hasWon'] && !this.$store.getters['game/hasLost']) {
        console.log('increment active Row')

        this.$store.commit('game/addStep')
        this.$store.dispatch('game/buildCombination', {
          index: this.$store.state.game.activeRow
        })

        this.$store.commit('mutate', {
          property: 'game.activeRow',
          value: (this.$store.state.game.activeRow + 1)
        })
      } else {
        console.log('end of the game')
        this.$root.$emit('gameEnd')
      }
    }
  }
}
</script>
