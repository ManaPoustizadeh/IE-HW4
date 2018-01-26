export const state = () => ({
    id: "1",
    username: "",
    avatar: "",
    phoneNumber: "",
    name: "",
    lastname: "",
    email: "",
    nickName: ""
});

export const mutations = {
    SET_USER(state, userData) {
        state.username = userData.username;
        state.lastname = userData.lastname;
        state.avatar = userData.avatar;
        state.phoneNumber = userData.phoneNumber;
        state.name = userData.name;
        state.email = userData.email;
        state.nickName = userData.nickName;
    }
};

export const actions = {
    async getUserData({ commit }, userId) {
        const url = "http://localhost:3001/users/" + userId;
        try {
            const data = await this.$axios.$get(url);
            commit('SET_USER', data);
        } catch (error) {
            console.log(error);    
        }
    }
}

export const getters = {
    user(state) {
        return state;
    }
}