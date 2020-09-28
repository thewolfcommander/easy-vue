import axios from 'axios'

const state= {
    restaurants: localStorage.getItem('restaurants') || [],
    restaurant: localStorage.getItem('restaurant') || {},
    food_categories: localStorage.getItem('food_categories') || [],
    foods: localStorage.getItem('foods') || [],
};
const getters= {
    getRestaurants: state => JSON.parse(state.restaurants),
    getRestaurantDetail: state => JSON.parse(state.restaurant),
    getFoodCategories: state => JSON.parse(state.food_categories),
    getFoods: state => JSON.parse(state.foods),
};
const actions= {
    getRestaurantsFromServer({commit}) {
        return new Promise((resolve, reject) => {
            axios({
                url: `${state.apiUrl}products/restaurants/?active`,
                method: 'GET'
            })
            .then(response => {
                localStorage.removeItem('restaurants');
                localStorage.setItem('restaurants', JSON.stringify(response.data))
                commit('SET_RESTAURANTS', JSON.stringify(response.data))
                resolve(response)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },
    getRestaurantDetailFromServer({commit}, id) {
        return new Promise((resolve, reject) => {
            axios({
                url: `${state.apiUrl}products/restaurants/${id}/`,
                method: 'GET',
            })
            .then(response => {
                localStorage.removeItem('restaurant');
                localStorage.setItem('restaurant', JSON.stringify(response.data))
                commit('SET_RESTAURANT', JSON.stringify(response.data))
                axios({
                    url: `${state.apiUrl}products/foods/?restaurant=${id}`,
                    method: 'GET'
                })
                .then(response => {
                    localStorage.removeItem('foods');
                    localStorage.setItem('foods', JSON.stringify(response.data))
                    commit('SET_FOODS', JSON.stringify(response.data))
                    resolve(response)
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
};
const mutations= {
    SET_RESTAURANTS(state, data) {
        state.restaurants = data
    },
    SET_RESTAURANT(state, data) {
        state.restaurant = data
    },
    SET_FOODS(state, data) {
        state.foods = data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}