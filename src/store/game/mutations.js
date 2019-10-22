import initialState from './initialState'

export function reset (state) {
  state = Object.assign(state, { ...JSON.parse(JSON.stringify(initialState)) })
}
