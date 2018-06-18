import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slugI18n: {
        en: 'about-us',
        nl: 'over-ons',
      },
    },
    mutations: {
      setSlugI18n (state, slugI18n) {
        state.slugI18n = slugI18n
      },
    }
  })
}

export default createStore
