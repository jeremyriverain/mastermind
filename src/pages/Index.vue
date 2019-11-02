<template>
  <q-page class="row items-center justify-center">
    <div>
      <help class="q-mb-xs"></help>
      <game
        class="col-xs-12 q-mb-lg"
        style="max-width:220px"
      ></game>
      <check-combination-btn></check-combination-btn>
    </div>
  </q-page>
</template>

<script>
import CheckCombinationBtn from 'components/CheckCombinationBtn'
import Game from 'components/Game'
import Help from 'components/Help'
export default {
  name: 'PageIndex',
  components: {
    CheckCombinationBtn,
    Game,
    Help
  }
}
</script>
