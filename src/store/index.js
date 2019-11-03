import Vue from 'vue'
import Vuex from 'vuex'
import { set } from 'lodash'
import createPersistedState from 'vuex-persistedstate'

import settings from './settings'
import game from './game'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      settings,
      game
    },
    state: {
      hasReadRules: false
    },
    mutations: {
      mutate (state, payload) {
        set(state, payload.property, payload.value)
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
    plugins: [createPersistedState()]

  })

  return Store
}
