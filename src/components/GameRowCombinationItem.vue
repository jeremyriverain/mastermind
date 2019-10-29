<template>
  <div class="q-pl-sm">
    <q-btn
      :color="computedColor"
      size="0.4rem"
      round
      text-color="black"
      glossy
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
    }
  },
  data () {
    return {
      colors: ['red', 'blue', 'yellow', 'green', 'white', 'purple'],
      color: null
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
      if (currentIndex === -1 || currentIndex + 1 === this.colors.length) {
        this.color = this.colors[0]
      } else {
        this.color = this.colors[currentIndex + 1]
      }
      this.$emit('chosen', this.color)
    }
  }
}
</script>
