<template>
  <q-badge
    size="21px"
    :color="color"
    :text-color="textColor"
    class="shadow-3"
    >
    <!--<span style="font-size:17px">{{value}}</span>-->
    <span>{{show ? value : '?'}}</span>
  </q-badge>
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
    },
    show: {
      type: Boolean,
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
