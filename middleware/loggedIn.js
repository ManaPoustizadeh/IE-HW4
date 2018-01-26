export default async function ({ store, redirect, error, app }) {

    await store.dispatch('auth/FETCH', app) //step 1

}