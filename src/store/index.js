import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'
import cart from '@/store/modules/cart'
import dboy from '@/store/modules/dboy'
import foodMenu from '@/store/modules/foodMenu'
import grocery from '@/store/modules/grocery'
import wishlist from '@/store/modules/wishlist'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    apiUrl: "https://easyeats-api-v1.herokuapp.com/api/v1/",
    overlay: false,
    version2: false,
    appVersion: "1.0.0",
    acceptedVersion: localStorage.getItem('acceptedVersion') || false,
    cartReloaded: localStorage.getItem('cartReloaded') || false,
  },
  getters: {
    getOverlay: state => !!state.overlay,
    getVersion: state => !!state.version2,
    getAppVersion: state => state.appVersion,
    getAcceptedVersion: state => !!state.acceptedVersion,
    getCartReloaded: state => !!state.cartReloaded
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
    },
    setCartReloaded({commit}) {
      commit('SET_CART_RELOADED')
    },
    setCartUnloaded({commit}) {
      commit('SET_CART_UNLOADED')
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
    },
    SET_CART_RELOADED(state) {
      state.cartReloaded = true
      localStorage.setItem('cartReloaded', true)
    },

    SET_CART_UNLOADED(state) {
      state.cartReloaded = false
      localStorage.setItem('cartReloaded', false)
    }
  },
  modules: {
    auth,
    cart,
    dboy,
    foodMenu,
    grocery,
    wishlist,
  }
})
