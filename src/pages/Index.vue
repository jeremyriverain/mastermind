<template>
  <q-page class="row items-center justify-center">
    <game
      class="col-xs-12 q-my-lg"
      style="max-width:190px"
    ></game>
  </q-page>
</template>

<script>
import Game from 'components/Game'
export default {
  name: 'PageIndex',
  components: {
    Game
  }
}
</script>
