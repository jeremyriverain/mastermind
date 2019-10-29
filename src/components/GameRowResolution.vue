<template>
  <div class="flex flex-center">
    <!-- <game-row-resolution-item
      v-for="i in max"
      :key="i"
      :index="i"
    ></game-row-resolution-item> -->
  </div>
</template>

<script>
// import GameRowResolutionItem from 'components/GameRowResolutionItem'

export default {
  name: 'GameRowResolution',
  components: {
    // GameRowResolutionItem
  },
  data () {
    return {
      widthItem: '15'
    }
  },
  computed: {
    max () {
      return this.$store.state.settings.numBoxes
    }
  }
}
</script>
