export default async function ({ store, redirect, error, app }) {

    await store.dispatch('user/FETCH', app) //step 1

    // If user not loggedIn, redirect to /login
    if (!store.state.user.loggedIn) {
        return redirect('/');
    }
    
    // if (store.state.auth.user.roles.indexOf("admin") === -1) {
    //     return redirect('/forbidden');
    // }
}