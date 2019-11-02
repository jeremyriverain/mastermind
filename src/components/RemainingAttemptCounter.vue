<template>
  <p>
    {{$tc('remaining_attempt', remainingAttemptCounter, {count: remainingAttemptCounter})}}
  </p>
</template>

<script>
export default {
  name: 'RemainingAttemptCounter',
  computed: {
    remainingAttemptCounter () {
      return this.$store.state.settings.numSteps - this.$store.state.game.activeRow + 1
    }
  }
}
</script>
