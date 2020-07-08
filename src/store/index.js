import Vuex from 'vuex'
import Vue from 'vue'
import todos from '../store/modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  }
})