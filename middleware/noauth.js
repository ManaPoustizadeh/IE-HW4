export default async function ({store, redirect, error, app}) {

    await store.dispatch('auth/FETCH', app) //TODO move this shit out of here! :/ 

    // // If user loggedIn, redirect to /
    if (store.state.auth.loggedIn) {
        return redirect('/');
    }

}