<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
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
