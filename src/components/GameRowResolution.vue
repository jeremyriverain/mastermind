<template>
  <div class="flex flex-center q-gutter-sm">
    <game-row-resolution-item color="black" :value="feedback.black" :show="show"></game-row-resolution-item>
    <game-row-resolution-item color="white" :value="feedback.white" :show="show"></game-row-resolution-item>
  </div>
</template>

<script>
import GameRowResolutionItem from 'components/GameRowResolutionItem'

export default {
  name: 'GameRowResolution',
  props: {
    numRow: {
      type: Number,
      required: true
    }
  },
  components: {
    GameRowResolutionItem
  },
  data () {
    return {
      widthItem: '15'
    }
  },
  computed: {
    feedback () {
      return this.$store.getters['game/feedback'](this.numRow - 1)
    },
    show () {
      return this.$store.state.game.steps[this.numRow - 1].feedback
    }
  }
}
</script>
