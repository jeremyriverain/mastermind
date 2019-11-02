import initialState from './initialState'
import bus from 'src/boot/bus'

export function reset (state) {
  state = Object.assign(state, { ...JSON.parse(JSON.stringify(initialState)) })
  bus.$emit('gameReset')
}

export function addStep (state) {
  state.steps.push({ combination: [] })
}
