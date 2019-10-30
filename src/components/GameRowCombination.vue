<template>
  <div class="flex justify-between no-wrap">
    <game-row-combination-item
      v-for="i in numBoxes"
      :key="i - 1"
      :isActiveRow="isActiveRow"
      @chosen="save(i - 1, $event)"
      class="q-px-xs"
      :color="isActiveRow ? combination[i - 1] : null"
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

    this.initCombination()
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
    },
    initCombination () {
      if (!this.isActiveRow || this.combination.length === this.numBoxes) {
        return
      }

      let newCombination
      console.log('init combination')

      let oldCombination = Object.assign([], this.combination)

      let diff = this.combination.length - this.numBoxes
      if (diff > 0) {
        newCombination = oldCombination.splice(0, this.numBoxes)

        console.log('remove', diff)
      } else {
        console.log('add', diff)
        let push = []

        for (let i = 0; i < Math.abs(diff); i++) {
          push.push(null)
        }

        console.log('old combination', oldCombination)
        newCombination = oldCombination.concat(push)
      }

      console.log('newCombination', newCombination)
      this.$store.commit('mutate', {
        property: 'game.steps[' + (this.numRow - 1) + '].combination',
        value: newCombination
      })
    }
  },
  computed: {
    combination () {
      if (!this.isActiveRow) {
        return null
      }

      return this.$store.state.game.steps[this.numRow - 1].combination
    },
    numBoxes () {
      return this.$store.state.settings.numBoxes
    }
  }
}
</script>
