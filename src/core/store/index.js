import Vue from 'vue';
import Vuex from 'vuex';

import { store as global } from '@shared/store';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    global,
  },
});
