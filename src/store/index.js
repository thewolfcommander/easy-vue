import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
})
