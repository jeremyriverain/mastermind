<template>
  <q-page
    class="column items-center justify-center"
    padding
  >
  <div>
    <help class="q-mb-xs"></help>
    <game-end-feedback v-if="$store.getters['game/hasWon'] || $store.getters['game/hasLost']" class="q-mb-md"></game-end-feedback>
    <remaining-attempt-counter class="q-mr-sm q-mb-md text-right" v-else></remaining-attempt-counter>
    <game
    class="col-xs-12 q-mb-lg q-mx-auto"
    style="max-width:300px"
    ></game>
    <check-combination-btn v-if="!$store.getters['game/hasWon'] && !$store.getters['game/hasLost']"></check-combination-btn>
  </div>
  </q-page>
</template>

<script>
import CheckCombinationBtn from 'components/CheckCombinationBtn'
import Game from 'components/Game'
import GameEndFeedback from 'components/GameEndFeedback'
import Help from 'components/Help'
import RemainingAttemptCounter from 'components/RemainingAttemptCounter'

export default {
  name: 'PageIndex',
  components: {
    CheckCombinationBtn,
    Game,
    GameEndFeedback,
    Help,
    RemainingAttemptCounter
  }
}
</script>
