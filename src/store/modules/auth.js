import axios from 'axios';


const state = {
    user: localStorage.getItem('user') || {},
    status: localStorage.getItem('status') || false,
    token: localStorage.getItem('token') || "",
    otpSent : false,
    otpVerified : false
};

const getters = {
    isLoggedIn: state => !!state.status,
    getUser: state => JSON.parse(state.user),
    getToken: state => state.token
};

const actions = {
    LoginWithToken({commit}, data) {
        if(!localStorage.getItem("refreshTokenStatus")) {
            //let data_token = JSON.stringify({"username":data.username,"password":data.password,"grant_type":"password"});

    let config = {
        method: 'post',
        url: `${this.state.apiUrl}oauth/token/`,
        headers: { 
            'Authorization': 'Basic dDFyVUtvbmJzTEFBWjI2YnlQZWJyT3pEQnZNT0FZSUpkTXNna3dSNTpFdXMyRFNpNDZrakFTcnhnMTFBMUZrQ0JwbHU5dE54enhZa082SkZVWUJzYUJvc29WeHFmZm9jdWRYNzZTTTh0VGFuS2V4SHQ5R0JUU2VFcUdRMGVKSHBBcExlcTg3eHJhaVg1SFRGVXg4ZTJ5OHRsSGkwdUIzU1JWRURjUlJJMg==', 
            'Content-Type': 'application/json'
        },
        //data : data_token
        data :JSON.stringify({"username":data.username,"password":data.password,"grant_type":"password"})
        };
        return new Promise((resolve, reject) => {
        axios(config)
            .then((res)=> {
                if(res.status === 200) {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.access_token)
                    localStorage.setItem('status', true)
                    localStorage.setItem("refreshToken", res.data.refresh_token)
                    localStorage.setItem("refreshTokenStatus", true)
                    commit('REFRESH_TOKEN', res.data)
                    // Log This user In
                    axios({
                        url: `${this.state.apiUrl}accounts/users/${data.username}/`,
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${res.data.access_token}`
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
                        axios({
                            url: `${this.state.apiUrl}cart/create/`,
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${res.data.access_token}`
                            }
                        })
                        .then(res => {
                            resolve(res)
                            localStorage.setItem('currentCart', res.data.id)
                            localStorage.setItem('cartItems', res.data.count)
                        })
                        .catch(err =>  reject(err))
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
                    
                }
            })
            .catch(err=> {
                reject(err)
            })
        })
    }
    },
    refreshToken({commit}) {

         const data_refresh = {
            grant_type : 'refresh_token',
            client_id  :'t1rUKonbsLAAZ26byPebrOzDBvMOAYIJdMsgkwR5',
            client_secret : 'Eus2DSi46kjASrxg11A1FkCBplu9tNxzxYkO6JFUYBsaBosoVxqffocudX76SM8tTanKexHt9GBTSeEqGQ0eJHpApLeq87xraiX5HTFUx8e2y8tlHi0uB3SRVEDcRRI2',
            refresh_token : localStorage.getItem("refreshToken"),
         }
         return new Promise((resolve, reject) => {
        axios({
            url: `${this.state.apiUrl}oauth/token/`,
            data: data_refresh,
            method: 'POST',
            headers: { 
                'Authorization': 'Basic dDFyVUtvbmJzTEFBWjI2YnlQZWJyT3pEQnZNT0FZSUpkTXNna3dSNTpFdXMyRFNpNDZrakFTcnhnMTFBMUZrQ0JwbHU5dE54enhZa082SkZVWUJzYUJvc29WeHFmZm9jdWRYNzZTTTh0VGFuS2V4SHQ5R0JUU2VFcUdRMGVKSHBBcExlcTg3eHJhaVg1SFRGVXg4ZTJ5OHRsSGkwdUIzU1JWRURjUlJJMg==',
              }
        })
        .then((res)=> {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('status', true)
            localStorage.setItem("refreshToken", res.data.refresh_token)
            localStorage.setItem("refreshTokenStatus", true)
            commit('REFRESH_TOKEN', res.data)
             // Log This user In
             axios({
                url: `${this.state.apiUrl}accounts/users/me`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${res.data.access_token}`
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
                axios({
                    url: `${this.state.apiUrl}cart/create/`,
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${res.data.access_token}`
                    }
                })
                .then(res => {
                    localStorage.setItem('currentCart', res.data.id)
                    localStorage.setItem('cartItems', res.data.count)
                    resolve(res)
                })
                .catch(err => reject(err))
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
    },

    registerUser({
        commit
    }, data) {

        return new Promise((resolve, reject) => {
            axios({
                url: `${this.state.apiUrl}accounts/register/`,
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

    syncProfile({commit}, data) {
        let username = data;
        axios({
            url: `${this.state.apiUrl}accounts/users/me`,
            method: 'GET',
            data : username,
            headers: {
                'Authorization': `Bearer ${this.getters.getToken}`
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
    },

    logoutUser({
        commit
    }) {
        localStorage.clear();
        commit('LOGOUT_USER');
    },
    sendOtp({
        commit
    },
        data) {
        return new Promise((resolve, reject) => {
            var bodyFormData = new FormData();
            bodyFormData.append("phone", data)
            axios({
                url: `${this.state.apiUrl}accounts/sendOTP/`,
                headers: {'Content-Type': 'multipart/form-data' },
                data: bodyFormData,
                method: 'POST'
            })
            .then(response => {
                console.log(response)
                commit('SEND_OTP', true);
                resolve(response)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
            
         });
        
    },
    verifyOtp({
        commit},
        data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            var bodyFormData = new FormData();
            bodyFormData.append("phone", data.phone)
            bodyFormData.append("otp", data.otp)

            axios({
                url: `${this.state.apiUrl}accounts/verifyOTP/`,
                headers: {'Content-Type': 'multipart/form-data' },
                data: bodyFormData,
                method: 'POST'
            })
            .then(response => {
                console.log(response)
                commit('VERIFY_OTP', true);
                resolve(response)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
            
         });
        
    }
};

const mutations = {
    SEND_OTP(state, response) {
        state.otpSent = response;
    },

    VERIFY_OTP(state, response) {
        state.otpVerified = response;
    },
    LOGIN_USER(state, response) {
        state.user = {}
        state.token = response
        state.status = true
    },
    REFRESH_TOKEN(state, response) {
        state.token = response.access_token
        state.refreshToken = response.refresh_token
        state.status = true;
    },

    SET_USER(state, response) {
        state.user = response
        window.location.reload()
    },

    LOGOUT_USER(state) {
        state.user = {};
        state.status = false;
        state.foodCart = [];
        state.groceryCart = [];
        state.cartItems = 0;
        state.cartTotal = 0.00;
        state.addressForCurrentOrder = {};
        state.cartFromServer = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}