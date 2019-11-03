import initialState from './initialState'

export function reset (state) {
  state = Object.assign(state, { ...JSON.parse(JSON.stringify(initialState)) })
}

export function addStep (state) {
  state.steps.push({ id: state.steps.length, combination: [] })
}
