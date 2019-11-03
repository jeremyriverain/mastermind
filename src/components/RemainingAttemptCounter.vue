<template>
  <p class="text-uppercase">
    {{$tc('remaining_attempt', remainingAttemptCounter, {count: remainingAttemptCounter})}}
  </p>
</template>

<script>
export default {
  name: 'RemainingAttemptCounter',
  computed: {
    remainingAttemptCounter () {
      let countFeedback = this.$store.state.game.steps.filter(step => step.feedback).length
      return this.$store.state.settings.numSteps - countFeedback
    }
  }
}
</script>
