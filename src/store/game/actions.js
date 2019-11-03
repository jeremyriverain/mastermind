export function reset ({ commit, dispatch }) {
  commit('reset')
  dispatch('initResultCombination')
  dispatch('buildCombination', {
    index: 0
  })
}

export function buildCombination ({ state, commit, rootState }, payload) {
  let combination = state.steps[payload.index].combination

  console.log('combination', combination)

  if (combination.length === rootState.settings.numBoxes) {
    return
  }

  let newCombination
  console.log('init combination')

  let oldCombination = Object.assign([], combination)

  let diff = combination.length - rootState.settings.numBoxes
  if (diff > 0) {
    newCombination = oldCombination.splice(0, rootState.settings.numBoxes)

    console.log('remove', diff)
  } else {
    console.log('add', diff)
    let push = []

    for (let i = 0; i < Math.abs(diff); i++) {
      push.push(null)
    }

    console.log('old combination', oldCombination)
    newCombination = oldCombination.concat(push)
  }

  console.log('newCombination', newCombination)
  commit('mutate', {
    property: 'game.steps[' + (payload.index) + '].combination',
    value: newCombination
  }, {
    root: true
  })
}

export function initResultCombination ({ state, commit, rootState }) {
  let combination = []
  let settingsStore = rootState.settings
  for (let i = 0; i < settingsStore.numBoxes; i++) {
    combination.push(settingsStore.colors[Math.floor(Math.random() * settingsStore.colors.length)])
  }

  console.log('result', combination)

  commit('mutate', {
    property: 'game.combination',
    value: combination
  }, {
    root: true
  })
}
