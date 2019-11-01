<template>
  <q-item class="bg-grey-8">

    <q-item-section>
      <div class="flex items-center justify-center no-wrap">
        <!-- <game-row-resolution></game-row-resolution> -->
        <game-row-combination
          :isActiveRow="isActiveRow"
          :numRow="numRow"
        >
          ></game-row-combination>
      </div>
    </q-item-section>

  </q-item>
</template>

<script>
import GameRowCombination from 'components/GameRowCombination'
// import GameRowResolution from 'components/GameRowResolution'
export default {
  name: 'GameRow',
  components: {
    GameRowCombination
    // GameRowResolution
  },
  props: {
    numRow: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActiveRow () {
      return this.numRow === this.$store.state.game.activeRow
    }
  }
}
</script>
