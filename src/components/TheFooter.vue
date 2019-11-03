<template>
  <transition
    appear
    mode="out-in"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <q-footer>
      <q-tabs
        indicator-color="black"
        class="bg-white"
        dense
        inline-label
        align="justify"
      >
        <q-route-tab
          :to="{path: '/'}"
          exact
          :label="$q.platform.is.mobile ? false : $t('play')"
          icon="play_arrow"
          class="text-black"
        />

        <restart-tab v-if="isPlaying"
          class="text-black"
          ></restart-tab>

        <q-route-tab
          class="text-black"
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
    isPlaying () {
      return this.$store.getters['game/isPlaying']
    }
  }
}
</script>
