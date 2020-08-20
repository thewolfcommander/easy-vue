const state = {
    isDboy: localStorage.getItem('isDboy') || false,
    isDboyVerified: localStorage.getItem('isDboyVerified') || true
};
const getters = {
    getIsDboy: state => state.isDboy,
    getisDboyVerified: state => state.isDboyVerified,
};
const actions = {
    makeDBoy({
        commit
    }) {
        commit('MAKE_DBOY')
    }
};
const mutations = {
    MAKE_DBOY(state) {
        state.isDboy = true
        localStorage.setItem('isDboy', true)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}