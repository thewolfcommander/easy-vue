import axios from 'axios';


const state = {
    user: localStorage.getItem('user') || {},
    status: localStorage.getItem('status') || false,
    token: localStorage.getItem('token') || ""
};

const getters = {
    isLoggedIn: state => !!state.status,
    getUser: state => JSON.parse(state.user)
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

                    axios({
                            url: `https://easyeats.co.in/api/v1/accounts/users/${data.username}/`,
                            method: 'GET',
                            headers: {
                                'Authorization': `Token ${response.data.token}`
                            }
                        })
                        .then(resp => {
                            let user = {
                                username: resp.data.user_id,
                                email: resp.data.email,
                                full_name: resp.data.full_name,
                                gender: resp.data.gender,
                                id: resp.data.id,
                                is_admin: resp.data.is_admin,
                                is_client: resp.data.is_client,
                                is_delivery: resp.data.is_delivery,
                                is_newsletter: resp.data.is_newsletter,
                                is_vendor: resp.data.is_vendor,
                                mobile_number: resp.data.mobile_number,
                                order_count: resp.data.order_count,
                                password: resp.data.password
                            }
                            localStorage.setItem('user', JSON.stringify(user))
                            commit('SET_USER', JSON.stringify(user))
                        })
                        .catch(err => {
                            console.log(err)
                        })
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

        return new Promise((resolve, reject) => {
            axios({
                url: `https://www.easyeats.co.in/api/v1/accounts/register/`,
                data: data,
                method: 'POST'
            })
            .then(response => {
                console.log(commit)
                resolve(response)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
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

    SET_USER(state, response) {
        state.user = response
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