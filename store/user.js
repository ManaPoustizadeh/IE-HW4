import Cookies from 'js-cookie'

// export const mutations = {
//     SET_USER(state, userData) {
//         state.username = userData.username;
//         state.lastname = userData.lastname;
//         state.avatar = userData.avatar;
//         state.phoneNumber = userData.phoneNumber;
//         state.name = userData.name;
//         state.email = userData.email;
//         state.nickName = userData.nickName;
//     }
// };

// export const actions = {
//     async getUserData({ commit }, userId) {
//         const url = "http://localhost:3001/users/" + userId;
//         try {
//             const data = await this.$axios.$get(url);
//             commit('SET_USER', data);
//         } catch (error) {
//             console.log(error);    
//         }
//     }
// }

export const getters = {
    user(state) {
        return state.user;
    },
    loggedIn(state) {
        return state.loggedIn;
    }
}

export const state = () => {
    return {
        user: {
            id: "",
            username: "",
            avatar: "",
            phoneNumber: "",
            name: "",
            lastname: "",
            email: "",
            nickName: ""
        },
        loggedIn: false
    }
}
export const mutations =  {
    SET_USER(state, user) {
        state.loggedIn = !!user
        state.user = user;
        // console.log(state.user);
    },

    SET_TOKEN(state, token, remember) {
        state.token = token;

        if( !token )
            return Cookies.remove('token')

        let expires = remember ? -1 : 1/90;
        Cookies.set('token', token, {expires: expires})
    },
}

export const actions = {
    async FETCH({ store, commit, dispatch }, { $axios }) {
        try {
            let { user } = (await $axios.get('auth/user')).data
            commit('SET_USER', user)
        } catch (error) {
            /*
            ** Handles unauthrized attempt
            */
            // TODO 
            dispatch('logout', { $axios }) // if data not found just log out destory user data
        }
    },

    async logout(ctx, { $axios }) {
        // commit('SET_USER', null);
        let endpoint = '/auth/logout';
        // if (appendToken) endpoint = endpoint + `/${ctx.state.token}`
        ctx.commit('SET_USER', null)

        let appendToken = false;

        // Append token
        
        console.log(ctx.state.token);
        // Server side logout
        return $axios.get(endpoint).then(() => {
            // Unset token
            ctx.commit('SET_TOKEN', null)
        }).catch(() => {
            // Unset token
            ctx.commit('SET_TOKEN', null)
        })
    }
};