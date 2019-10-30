<template>
  <div>
    <q-btn
      :color="computedColor"
      size="0.5rem"
      round
      unelevated
      text-color="grey-10"
      glossy
      :outline="!color && !isActiveRow"
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
  data () {
    return {
      colors: ['red', 'blue', 'yellow', 'green', 'white', 'purple']
    }
  },
  // mounted () {
  //   this.color = this.isActiveRow ? 'grey-4' : 'grey-6'
  // },
  computed: {
    computedColor () {
      return this.color ? this.color : 'grey-6'
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
