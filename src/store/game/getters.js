export function isPlaying (state) {
  let isPlaying = false
  for (let i = 0; i < state.steps.length; i++) {
    const step = state.steps[i]
    for (let j = 0; j < step.combination.length; j++) {
      if (step.combination[j] !== null) {
        isPlaying = true
        break
      }
    }
  }
  return isPlaying
}
