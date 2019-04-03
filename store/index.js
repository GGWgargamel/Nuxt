import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getter'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    getters,
    state,
    mutations
  })
}
export default createStore
