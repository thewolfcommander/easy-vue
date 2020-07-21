import axios from 'axios';

const state= {
    cart: Array(localStorage.getItem('cart')) || [],
    cartItems: +localStorage.getItem('cartItems') || 0
};
const getters= {
    getCartItemsCount: state => state.cartItems,
    getCart: state => JSON.parse(state.cart)
};
const actions= {

    // getCartItems({commit}) {
    //     axios({
    //         url: `https://www.easyeats.co.in/api/v1/cart/food-entry/create/`
    //     })
    // },
    addToCart({commit}, data) {
        axios({
            url: `https://www.easyeats.co.in/api/v1/cart/food-entry/create/`,
            method: 'POST',
            data: data
        })
        .then(response => {
            commit('ADD_TO_CART', JSON.stringify(data))
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    },

    removeFromCart({commit}, id) {
        commit('REMOVE_FROM_CART', id)
    }
};
const mutations= {
    ADD_TO_CART(state, data) {
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