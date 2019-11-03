export function isPlaying (state) {
  let isPlaying = false
  for (let j = 0; j < state.steps[0].combination.length; j++) {
    if (state.steps[0].combination[j] !== null) {
      isPlaying = true
      break
    }
  }
  return isPlaying
}

export function hasLost (state, getters, rootState) {
  let hasLost = false
  if (!getters['hasWon'] && state.steps.length >= rootState.settings.numSteps) {
    hasLost = true
  }

  return hasLost
}

export function hasWon (state, getters, rootState) {
  let hasWon = false
  if (state.steps.length <= rootState.settings.numSteps && getters['feedback'](state.steps.length - 1).black === rootState.settings.numBoxes) {
    hasWon = true
  }
  return hasWon
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
