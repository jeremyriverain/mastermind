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

export const feedback = (state) => (index) => {
  let black = 0
  let white = 0

  let result = Object.assign([], state.combination)
  let proposal = Object.assign([], state.steps[index].combination)

  let uncheckedIndexes = []

  for (let i = 0; i < proposal.length; i++) {
    if (result[i] === proposal[i]) {
      black++
    } else {
      uncheckedIndexes.push(i)
    }
  }

  console.log('uncheckedIndexes', uncheckedIndexes)

  for (let i = 0; i < uncheckedIndexes.length; i++) {
    if (result.indexOf(proposal[uncheckedIndexes[i]]) !== -1) {
      white++
    }
  }

  console.log('result', result, 'proposal', proposal)

  return {
    black: black,
    white: white
  }
}
