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
        class="bg-black"
      >
        <q-route-tab
          :to="{path: '/'}"
          exact
          :label="$t('play')"
          icon="gamepad"
        />

        <q-route-tab
          :to="{name: 'settings'}"
          exact
          :label="$t('settings')"
          icon="settings"
        />

      </q-tabs>
    </q-footer>
  </transition>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
