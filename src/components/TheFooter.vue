<template>
  <transition
    appear
    mode="out-in"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <q-footer>
      <q-tabs
        indicator-color="white"
        dense
        inline-label
        align="justify"
        class="bg-grey-9"
      >
        <q-route-tab
          :to="{path: '/'}"
          exact
          :label="$q.platform.is.mobile ? false : $t('play')"
          icon="play_arrow"
        />

        <restart-tab v-if="showRestartBtn"
          ></restart-tab>

        <q-route-tab
          :to="{name: 'settings'}"
          exact
          :label="$q.platform.is.mobile ? false : $t('settings')"
          icon="settings"
        />

      </q-tabs>
    </q-footer>
  </transition>
</template>

<script>
import RestartTab from 'components/TheFooterRestartTab'
export default {
  name: 'TheFooter',
  components: {
    RestartTab
  },
  computed: {
    showRestartBtn () {
      return this.$store.getters['game/isPlaying'] || this.$store.getters['game/hasWon'] || this.$store.getters['game/hasLost']
    }
  }
}
</script>
