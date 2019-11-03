<template>
  <div>
    <q-card
      style="width:100%"
      class="bg-grey-9"
      bordered
    >

      <game-row
        v-for="i in activeRow"
        :key="steps[i - 1].id"
        :numRow="i"
      ></game-row>

    </q-card>
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
