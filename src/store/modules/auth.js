const state = {
    user : localStorage.getItem('user') || {},
    status: localStorage.getItem('status') || false,
};

const getters = {
    isLoggedIn: state => !!state.status,
};

const actions = {
    loginUser({commit}, data) {
        localStorage.setItem('user', JSON.stringify(data))
        commit('LOGIN_USER', JSON.stringify(data));
    },

    registerUser({commit}, data) {
        localStorage.setItem('user', JSON.stringify(data))
        commit('LOGIN_USER', JSON.stringify(data));
    },

    logoutUser({commit}) {
        localStorage.clear();
        commit('LOGOUT_USER');
    }
};

const mutations = {
    LOGIN_USER(state, data) {
        state.user = data
        state.status = true
    },

    LOGOUT_USER(state) {
        state.user = {};
        state.status = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}