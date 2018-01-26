import Cookies from 'js-cookie'
export default {
    state() {
        return {
            user: {},
            loggedIn: false
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.loggedIn = !!user
            state.user = user
        },

        SET_TOKEN(state, token) {
            state.token = token;

            if( !token )
                return Cookies.remove('token')

            Cookies.set('token', token, {expires: 1/48})
        },

    },
    actions: {
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
            if (appendToken) endpoint = endpoint + `/${ctx.state.token}`
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
    },
    // getters: {
    //     addresses(state) {
    //         return state.user.addresses
    //     }
    // }

}