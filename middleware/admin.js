export default async function ({ store, redirect, error, app }) {

    // If user not loggedIn, redirect to /login
    if (store.state.auth.user.roles.indexOf('admin') === -1) {
        return redirect('/forbidden');
    }

}