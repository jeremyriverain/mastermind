<template>
  <div class="flex justify-between no-wrap">
    <game-row-combination-item
      v-for="i in $store.state.settings.numBoxes"
      :key="i"
      :isActiveRow="isActiveRow"
      @chosen="save(i, $event)"
      class="q-px-xs"
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
  },
  methods: {
    save (index, color) {
      console.log('saving combination')
      let combination = [null, null, null, null, null]
      combination[index - 1] = color
      this.$store.commit('mutate', {
        property: `game.steps[${this.numRow - 1}].combination`,
        value: combination
      })
    }
  }
}
</script>
