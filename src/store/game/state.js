import initialState from './initialState'
export default () => ({
  ...JSON.parse(JSON.stringify(initialState))
})
