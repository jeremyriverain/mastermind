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
