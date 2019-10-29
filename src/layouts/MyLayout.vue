<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="text-primary fixed-top">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <reload-game-btn v-if="$route.name === 'homepage' && $store.getters['game/isPlaying']"></reload-game-btn>
      </transition>
    </q-toolbar>
    <q-page-container>
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
    <the-footer></the-footer>
  </q-layout>
</template>

<script>
import ReloadGameBtn from 'components/ReloadGameBtn'
import TheFooter from 'components/TheFooter'
export default {
  name: 'MyLayout',
  components: {
    ReloadGameBtn,
    TheFooter
  }
}
</script>
