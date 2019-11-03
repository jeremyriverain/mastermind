<template>
  <div>
    <q-list
      dark
      class="mastermind-board text-white"
      style="width:100%;overflow:hidden"
    >

      <game-row
        v-for="i in activeRow"
        :key="steps[i - 1].id"
        :numRow="i"
      ></game-row>

    </q-list>
  </div>

</template>

<script>
import GameRow from 'components/GameRow'
export default {
  name: 'Game',
  components: {
    GameRow
  },
  computed: {
    activeRow () {
      return this.$store.state.game.activeRow
    },
    steps () {
      return this.$store.state.game.steps
    }
  }
}
</script>

<style lang="stylus" scoped>
.mastermind-board {
  background: url(./../assets/wood_pattern.png) no-repeat center center fixed;
  background-size: cover;
  box-shadow: 2px 2px 0px #4e342e;
}
</style>
