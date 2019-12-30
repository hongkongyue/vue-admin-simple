import Vue from 'vue'
import Vuex from 'vuex'
import home from './homeModules.js'
import user from './userModules.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    home,
    user,
  }
});

export default store;