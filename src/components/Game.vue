<template>
  <div>
    <q-list
      separator
      dark
      class="mastermind-board text-white"
      style="width:100%;border-radius:5px;overflow:hidden"
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

<style lang="stylus">
.mastermind-board {
  background-color: #eed;
  box-shadow: 2px 2px 0px #4e342e;
}
</style>
