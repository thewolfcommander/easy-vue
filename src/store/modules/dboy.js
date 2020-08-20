import axios from 'axios'

const state = {
    isDboy: localStorage.getItem('isDboy') || false,
    dboy: localStorage.getItem('dboy') || {}
};
const getters = {
    getIsDboy: state => state.isDboy,
    getisDboyVerified: state => JSON.parse(state.user).is_delivery,
    getDboy: state => JSON.parse(state.dboy)
};
const actions = {
    makeDBoy({
        commit
    }, data) {
        axios({
            url: `https://easyeats-api-v1.herokuapp.com/api/v1/accounts/dboys/create/`,
            method: 'POST',
            data: data,
            headers: {
                Authorization: `Token ${this.getters.getToken}`
            }
        })
        .then(response => {
            const dboy = {
                id: response.id,
                business_email: response.business_email,
                business_phone: response.business_phone,
                address1: response.address1,
                address2: response.address2,
                city: response.city,
                state: response.city,
                landmark: response.landmark,
                country: response.country,
                pincode: response.pincode
            }
            localStorage.setItem('dboy', JSON.stringify(dboy))
            commit('MAKE_DBOY', JSON.stringify(dboy))
        })
    }
};
const mutations = {
    MAKE_DBOY(state, resp) {
        state.isDboy = true
        localStorage.setItem('isDboy', true)
        state.dboy = resp
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}