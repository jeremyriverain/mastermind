export function isPlaying (state, getters) {
  let isPlaying = false
  if (!getters['hasLost'] && !getters['hasWon']) {
    for (let j = 0; j < state.steps[0].combination.length; j++) {
      if (state.steps[0].combination[j] !== null) {
        isPlaying = true
        break
      }
    }
  }
  return isPlaying
}

export function hasLost (state, getters, rootState) {
  let hasLost = false
  if (!getters['hasWon'] && state.steps.length === rootState.settings.numSteps && state.steps[rootState.settings.numSteps - 1].feedback) {
    hasLost = true
  }

  return hasLost
}

export function hasWon (state, getters, rootState) {
  let hasWon = false
  if (state.steps.length <= rootState.settings.numSteps && state.steps[state.steps.length - 1].feedback && getters['feedback'](state.steps.length - 1).black === rootState.settings.numBoxes) {
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
      result[i] = null
      proposal[i] = null
    } else {
      uncheckedIndexes.push(i)
    }
  }

  console.log('uncheckedIndexes', uncheckedIndexes)

  for (let i = 0; i < uncheckedIndexes.length; i++) {
    let index = result.indexOf(proposal[uncheckedIndexes[i]])
    if (index !== -1) {
      white++
      result[index] = null
    }
  }

  console.log('result', result, 'proposal', proposal)

  return {
    black: black,
    white: white
  }
}
