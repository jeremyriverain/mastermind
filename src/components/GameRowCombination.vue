<template>
  <div class="flex justify-between no-wrap">
    <game-row-combination-item
      v-for="i in numBoxes"
      :key="i - 1"
      :isActiveRow="isActiveRow"
      @chosen="save(i - 1, $event)"
      class="q-px-xs"
      :color="combination[i - 1]"
    ></game-row-combination-item>
  </div>
</template>

<script>
import GameRowCombinationItem from 'components/GameRowCombinationItem'
export default {
  name: 'GameRowCombination',
  components: {
    GameRowCombinationItem
  },
  props: {
    isActiveRow: {
      type: Boolean,
      required: true
    },
    numRow: {
      type: Number,
      required: true
    }
  },
  mounted () {
    console.log('isPlaying', this.$store.getters['game/isPlaying'])

    this.$store.dispatch('game/buildCombination', {
      index: this.numRow - 1
    })
  },
  methods: {
    save (index, color) {
      console.log('saving combination')
      let combination = Object.assign([], this.combination)
      combination[index] = color
      this.$store.commit('mutate', {
        property: `game.steps[${this.numRow - 1}].combination`,
        value: combination
      })
    }
  },
  computed: {
    combination () {
      return this.$store.state.game.steps[this.numRow - 1].combination
    },
    numBoxes () {
      return this.$store.state.settings.numBoxes
    }
  }
}
</script>
