import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slugI18n: {},
    },
    mutations: {
      setSlugI18n (state, slugI18n) {
        state.slugI18n = slugI18n
      },
    }
  })
}

export default createStore
