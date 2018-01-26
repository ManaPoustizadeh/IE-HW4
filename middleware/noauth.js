export default async function ({store, redirect, error, app}) {

    await store.dispatch('user/FETCH', app) //TODO move this shit out of here! :/ 

    // // If user loggedIn, redirect to /
    if (store.state.user.loggedIn) {
        return redirect('/');
    }

}