<template>
  <div>
    <q-btn
      :style="'background:' + computedColor"
      size="0.45rem"
      round
      unelevated
      text-color="brown-7"
      :glossy="color !== null"
      @click="onClick"
      :ripple="false"
      :disable="!isActiveRow"
    />
  </div>
</template>

<script>
export default {
  name: 'GameRowCombinationItem',
  props: {
    isActiveRow: {
      type: Boolean,
      required: true
    },
    color: {
      type: String
    }
  },
  // mounted () {
  //   this.color = this.isActiveRow ? 'grey-4' : 'grey-6'
  // },
  computed: {
    computedColor () {
      return this.color ? this.color : '#bcaaa4'
    },
    style () {
      return 'background:' + this.computedColor
    },
    colors () {
      return this.$store.state.settings.colors
    }
  },
  methods: {
    onClick () {
      let currentIndex = this.colors.findIndex(c => c === this.color)
      console.log(currentIndex, this.colors.length)
      let newColor
      if (currentIndex === -1 || currentIndex + 1 === this.colors.length) {
        newColor = this.colors[0]
      } else {
        newColor = this.colors[currentIndex + 1]
      }
      this.$emit('chosen', newColor)
    }
  }
}
</script>
