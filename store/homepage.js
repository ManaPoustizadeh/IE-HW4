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
        state.hottestMovies = newHomepageData.hottestMovies;
        state.staticBanner = newHomepageData.staticBanner;
        state.staticBannerBackColor = newHomepageData.staticBannerBackColor;
        state.staticBannerTextColor = newHomepageData.staticBannerTextColor;
        state.staticBannerTitle = newHomepageData.staticBannerTitle;
        state.staticBannerSubTitle = newHomepageData.staticBannerSubTitle;
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
            const data = await this.$axios.$get('http://localhost:3001/homepage/1');
            commit('SET_STATE', data);
        } catch (error) {
            console.log(error);    
        }
    }
}