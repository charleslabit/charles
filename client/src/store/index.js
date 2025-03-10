import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    TOGGLE_DRAWER: (state, data) => {
      state.drawer = !data;
    },
  },
  plugins: [
    createPersistedState()
  ],
  actions: {},
  modules: {},
});
