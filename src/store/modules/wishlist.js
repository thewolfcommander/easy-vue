const state= {
    wishlist: Array(localStorage.getItem('wishlist')) || [],
    wishlistItems: +localStorage.getItem('wishlistItems') || 0
};
const getters= {
    getWishlistItemsCount: state => state.wishlistItems,
    getWishlist: state => JSON.parse(state.wishlist)
};
const actions= {
    addToWishlist({commit}, data) {
        commit('ADD_TO_WISHLIST', JSON.stringify(data))
    },

    removeFromWishlist({commit}, id) {
        commit('REMOVE_FROM_WISHLIST', id)
    }
};
const mutations= {
    ADD_TO_WISHLIST(state, data) {
        if (state.wishlist.some(item => {
            item.id === data.id
        })) {
            alert('already in wishlist')
        }
        state.wishlist.push(data)
        state.wishlistItems += 1
        localStorage.removeItem('wishlist')
        localStorage.removeItem('wishlistItems')
        localStorage.setItem('wishlist', state.wishlist)
        localStorage.setItem('wishlistItems', state.wishlistItems)
    },

    REMOVE_FROM_WISHLIST(state, id) {
        state.wishlist.filter(item => {
            return item.id != id
        })
        state.wishlistItems -= 1
        localStorage.removeItem('wishlist')
        localStorage.removeItem('wishlistItems')
        localStorage.setItem('wishlist', state.wishlist)
        localStorage.setItem('wishlistItems', state.wishlistItems)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}