import axios from 'axios';


const state = {
    user: localStorage.getItem('user') || {},
    status: localStorage.getItem('status') || false,
    token: localStorage.getItem('token') || ""
};

const getters = {
    isLoggedIn: state => !!state.status,
};

const actions = {
    loginUser({
        commit
    }, data) {

        return new Promise((resolve, reject) => {
            console.log(data)
            axios({
                    url: `https://www.easyeats.co.in/api/v1/accounts/login/`,
                    data: data,
                    method: 'POST'
                })
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('status', true)
                    commit('LOGIN_USER', response.data.token);
                    resolve(response)
                })
                .catch(err => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('status')
                    console.log(err)
                    reject(err)
                })
        });
    },

    registerUser({
        commit
    }, data) {
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('status', true)
        commit('LOGIN_USER', JSON.stringify(data));
    },

    logoutUser({
        commit
    }) {
        localStorage.clear();
        commit('LOGOUT_USER');
    }
};

const mutations = {
    LOGIN_USER(state, response) {
        state.user = {}
        state.token = response
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