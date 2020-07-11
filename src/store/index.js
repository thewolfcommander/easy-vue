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
  modules: {
    auth,
    cart,
    foodMenu,
    grocery,
    wishlist,
  }
})
