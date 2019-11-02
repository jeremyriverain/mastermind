<template>
  <div class="flex flex-center q-gutter-sm">
    <q-avatar
      size="21px"
      color="black"
    >
      <span style="font-size:17px">2</span></q-avatar>
    <q-avatar
      size="20px"
      color="white"
      text-color="black"
    ><span style="font-size:17px">1</span></q-avatar>

  </div>
</template>

<script>

export default {
  name: 'GameRowResolution',
  data () {
    return {
      widthItem: '15'
    }
  },
  computed: {
    max () {
      return this.$store.state.settings.numBoxes
    }
  }
}
</script>
