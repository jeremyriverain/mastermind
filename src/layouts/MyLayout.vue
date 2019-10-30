<template>
  <q-layout view="lHh Lpr lFf">
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
import TheFooter from 'components/TheFooter'
export default {
  name: 'MyLayout',
  components: {
    TheFooter
  }
}
</script>
