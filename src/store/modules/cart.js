const state= {
    cart: localStorage.getItem('cart') || [],
    cartItems: localStorage.getItem('cartItems') || 1
};
const getters= {
    getCartItemsCount: state => state.cartItems,
    getCart: state => JSON.parse(state.cart)
};
const actions= {
    addToCart({commit}, data) {
        commit('ADD_TO_CART', JSON.stringify(data))
    },

    removeFromCart({commit}, id) {
        commit('REMOVE_FROM_CART', id)
    }
};
const mutations= {
    ADD_TO_CART(state, data) {
        alert(data)
        state.cart.push(data)
        state.cartItems += 1
        localStorage.removeItem('cart')
        localStorage.removeItem('cartItems')
        localStorage.setItem('cart', state.cart)
        localStorage.setItem('cartItems', state.cartItems)
    },

    REMOVE_FROM_CART(state, id) {
        state.cart.filter(item => {
            return item.id != id
        })
        state.cartItems -= 1
        localStorage.removeItem('cart')
        localStorage.removeItem('cartItems')
        localStorage.setItem('cart', state.cart)
        localStorage.setItem('cartItems', state.cartItems)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}