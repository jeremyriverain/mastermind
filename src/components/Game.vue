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
        v-for="i in $store.state.settings.numSteps"
        :key="i"
        :numRow="Math.abs(i - 1 - $store.state.settings.numSteps)"
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
  }
}
</script>

<style lang="stylus">
.mastermind-board {
  background-color: #eed;
  box-shadow: 6px 8px 5px rgba(0, 0, 0, 0.6);
}
</style>
