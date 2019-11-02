<template>
  <div>
    <q-list
      bordered
      separator
      dark
      class="mastermind-board text-white"
      style="width:100%;border-radius:5px;overflow:hidden"
    >

      <game-row
        v-for="i in activeRow"
        :key="i"
        :numRow="Math.abs(i - 1 - activeRow)"
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
    }
  }
}
</script>

<style lang="stylus">
.mastermind-board {
  background-color: #eed;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.6);
}
</style>
