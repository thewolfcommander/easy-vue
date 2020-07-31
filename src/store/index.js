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
    version2: false,
    appVersion: "1.0.0",
    acceptedVersion: localStorage.getItem('acceptedVersion') || false,
  },
  getters: {
    getOverlay: state => !!state.overlay,
    getVersion: state => !!state.version2,
    getAppVersion: state => state.appVersion,
    getAcceptedVersion: state => !!state.acceptedVersion
  },
  actions: {
    startLoading({commit}) {
      commit('START_LOADING')
    },
    stopLoading({commit}) {
      commit('STOP_LOADING')
    },
    acceptNewUpdate({commit}) {
      commit('ACCEPT_NEW_UPDATE')
    }
  },
  mutations: {
    START_LOADING(state) {
      state.overlay = true
    },
    STOP_LOADING(state) {
      state.overlay = false
    },
    ACCEPT_NEW_UPDATE(state) {
      state.acceptedVersion = true
      localStorage.setItem('acceptedVersion', true)
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
