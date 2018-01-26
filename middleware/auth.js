export default async function ({ store, redirect, error, app }) {

    await store.dispatch('auth/FETCH', app) //step 1

    // If user not loggedIn, redirect to /login
    if (!store.state.auth.loggedIn) {
        return redirect('/login');
    }
    
    // if (store.state.auth.user.roles.indexOf("admin") === -1) {
    //     return redirect('/forbidden');
    // }
}