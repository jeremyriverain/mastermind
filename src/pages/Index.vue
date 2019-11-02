<template>
  <q-page
    class="row items-center justify-center"
    padding
  >
    <div>
      <help class="q-mb-xs"></help>
      <remaining-attempt-counter class="q-mr-sm q-mb-md text-right"></remaining-attempt-counter>
      <game
        class="col-xs-12 q-mb-lg"
        style="max-width:300px"
      ></game>
      <check-combination-btn v-if="$store.state.game.activeRow <= $store.state.settings.numSteps"></check-combination-btn>
    </div>
  </q-page>
</template>

<script>
import CheckCombinationBtn from 'components/CheckCombinationBtn'
import Game from 'components/Game'
import Help from 'components/Help'
import RemainingAttemptCounter from 'components/RemainingAttemptCounter'

export default {
  name: 'PageIndex',
  components: {
    CheckCombinationBtn,
    Game,
    Help,
    RemainingAttemptCounter
  }
}
</script>
