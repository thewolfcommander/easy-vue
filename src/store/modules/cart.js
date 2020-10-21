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

    removeFromFoodCart({commit}, id) {
        commit('REMOVE_FROM_FOOD_CART', id)
    },

    removeFromGroceryCart({commit}, id) {
        commit('REMOVE_FROM_GROCERY_CART', id)
    },

    billingAddressForOrder({commit}, id) {
        commit('BILLING_ADDRESS_FOR_ORDER', id)
    },
    cartFromServer({commit}, data) {
        commit('CART_FROM_SERVER', data)
    },
    clearCart({commit}) {
        commit('CLEAR_CART')
    },
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
        let groceries = JSON.parse(localStorage.getItem('groceryCart'));
        groceries = groceries ? groceries : [];
        groceries.push(data)
        state.groceryCart = JSON.stringify(groceries)
        state.cartItems += 1
        localStorage.setItem('groceryCart', JSON.stringify(groceries))
        localStorage.setItem('cartItems', state.cartItems)
    },

    REMOVE_FROM_FOOD_CART(state, id) {
        const index = JSON.parse(state.foodCart).findIndex(item => JSON.parse(item).food.id === id)
        let newCart = JSON.parse(state.foodCart)
        newCart.splice(index, 1)
        state.foodCart = JSON.stringify(newCart)
        console.log(state.foodCart)
        state.cartItems -= 1
        localStorage.setItem('foodCart', state.foodCart)
        localStorage.setItem('cartItems', state.cartItems)
    },

    REMOVE_FROM_GROCERY_CART(state, id) {
        const index = JSON.parse(state.groceryCart).findIndex(item => JSON.parse(item).grocery.id === id)
        let newCart = JSON.parse(state.groceryCart)
        newCart.splice(index, 1)
        state.groceryCart = JSON.stringify(newCart)
        console.log(state.groceryCart)
        state.cartItems -= 1
        localStorage.setItem('groceryCart', state.groceryCart)
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
        console.log(data)
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