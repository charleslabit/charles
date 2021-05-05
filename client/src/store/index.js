import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: "",
  },
  mutations: {
    ADD_INFO: (state, data) => {
      state.userInfo = data;
    },
  },
  plugins: [
    createPersistedState()
  ],
  actions: {},
  modules: {},
});
