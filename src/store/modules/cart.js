// import axios from 'axios';

const state= {
    foodCart: Array(localStorage.getItem('foodCart')) || [],
    groceryCart: Array(localStorage.getItem('groceryCart')) || [],
    cartItems: +localStorage.getItem('cartItems') || 0,
    cartTotal: localStorage.getItem('cartTotal') || 0.00,
    addressForCurrentOrder: +localStorage.getItem('addressForCurrentOrder') || null,
    cartFromServer: localStorage.getItem('cartFromServer') || {},
};
const getters= {
    getCartItemsCount: state => state.cartItems,
    getFoodCart: state => state.foodCart,
    getGroceryCart: state => state.groceryCart,
    // getFoodCartTotal(state) {
    //     return JSON.parse(state.foodCart).reduce((acc, cartItem) => {
    //         return JSON.parse(cartItem).quantity * JSON.parse(cartItem).food.price + acc
    //     })
    // },
    getFoodCartTotal: state => state.cartTotal,
    getAddressForCurrentOrder: state => state.addressForCurrentOrder,
    getCartFromServer: state => JSON.parse(state.cartFromServer)
};
const actions= {

    // getCartItems({commit}) {
    //     axios({
    //         url: `https://www.easyeats.co.in/api/v1/cart/food-entry/create/`
    //     })
    // },
    addToFoodCart({commit}, data) {
        commit('ADD_TO_FOOD_CART', JSON.stringify(data))
    },

    addToGroceryCart({commit}, data) {
        commit('ADD_TO_GROCERY_CART', JSON.stringify(data))
    },

    removeFromCart({commit}, id) {
        commit('REMOVE_FROM_CART', id)
    },

    billingAddressForOrder({commit}, id) {
        commit('BILLING_ADDRESS_FOR_ORDER', id)
    },
    cartFromServer({commit}, data) {
        commit('CART_FROM_SERVER', data)
    },
    clearCart({commit}) {
        commit('CLEAR_CART')
    }
};
const mutations= {
    ADD_TO_FOOD_CART(state, data) {
        let foods = JSON.parse(localStorage.getItem('foodCart'));
        foods = foods ? foods : [];
        foods.push(data)
        state.foodCart = JSON.stringify(foods)
        state.cartItems += 1
        localStorage.setItem('foodCart', JSON.stringify(foods))
        localStorage.setItem('cartItems', state.cartItems)
    },

    ADD_TO_GROCERY_CART(state, data) {
        state.groceryCart.push(data)
        state.cartItems += 1
        localStorage.setItem('groceryCart', state.groceryCart)
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
    },

    UPDATE_CART_TOTAL(state, data) {
        state.cartTotal += data
    },

    BILLING_ADDRESS_FOR_ORDER(state, id) {
        state.addressForCurrentOrder = id
        localStorage.setItem('addressForCurrentOrder', id)
    },

    CART_FROM_SERVER(state, data) {
        state.cartFromServer = data
        localStorage.setItem('cartFromServer', data)
    },
    CLEAR_CART(state) {
        state.cartItems = 0,
        state.foodCart = [],
        state.groceryCart = [],
        state.cartTotal = 0.00,
        state.addressForCurrentOrder = null,
        state.cartFromServer = {}
        localStorage.removeItem('cartItems')
        localStorage.removeItem('foodCart')
        localStorage.removeItem('groceryCart')
        localStorage.removeItem('cartTotal')
        localStorage.removeItem('addressForCurrentOrder')
        localStorage.removeItem('cartFromServer')
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}