<template>
  <q-avatar
    size="21px"
    :color="color"
    :text-color="textColor"
    >
    <span style="font-size:17px">{{value}}</span>
  </q-avatar>
</template>

<script>
export default {
  name: 'GameRowResolutionItem',
  props: {
    color: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    textColor () {
      return this.color === 'black' ? 'white' : 'black'
    }
  }
}
</script>
