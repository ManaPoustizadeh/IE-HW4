export const state = () => ({
    searchBackground: "",
    hottestMovies: [],
    staticBanner: "",
    staticBannerBackColor: "",
    staticBannerTextColor: "", 
});

export const mutations = {
    SET_STATE (state, newHomepageData) {
        state.searchBackground = newHomepageData.searchBackground;
        state.staticBanner = newHomepageData.staticBanner;
        state.staticBannerBackColor = newHomepageData.staticBannerBackColor;
        state.staticBannerTextColor = newHomepageData.staticBannerTextColor;
        state.staticBannerTitle = newHomepageData.staticBannerTitle;
        state.staticBannerSubTitle = newHomepageData.staticBannerSubTitle;
    },
    SET_HOTTEST_MOVIES (state, newHottestMovies) {
        state.hottestMovies = newHottestMovies;
    }
}

export const getters = {
    getState(state) {
        return state;
    }
}

export const actions = {
    async getHomepageData({ commit }) {
        try {
            const data = await this.$axios.$get('/homepage');
            commit('SET_STATE', data);
        } catch (error) {
            console.log(error);    
        }
    },

    async getRecentMovies({ commit }) {
        try {
            const data = await this.$axios.$get('/movie/recent/10');
            commit('SET_HOTTEST_MOVIES', data);
        } catch (error) {
            console.log(error);    
        }
    }
}