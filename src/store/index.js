import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'
import cart from '@/store/modules/cart'
import foodMenu from '@/store/modules/foodMenu'
import grocery from '@/store/modules/grocery'
import wishlist from '@/store/modules/wishlist'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    overlay: false,
  },
  getters: {
    getOverlay: state => !!state.overlay
  },
  actions: {
    startLoading({commit}) {
      commit('START_LOADING')
    },
    stopLoading({commit}) {
      commit('STOP_LOADING')
    },
  },
  mutations: {
    START_LOADING(state) {
      state.overlay = true
    },
    STOP_LOADING(state) {
      state.overlay = false
    }
  },
  modules: {
    auth,
    cart,
    foodMenu,
    grocery,
    wishlist,
  }
})
