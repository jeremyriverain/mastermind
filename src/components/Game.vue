<template>
  <q-list
    bordered
    separator
    dark
    class="text-white"
  >

    <game-row
      v-for="i in $store.state.settings.numSteps"
      :key="i"
      :numRow="Math.abs(i - 1 - $store.state.settings.numSteps)"
    ></game-row>

  </q-list>
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
