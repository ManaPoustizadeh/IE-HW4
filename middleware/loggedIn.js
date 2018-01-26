export default async function ({ store, redirect, error, app }) {

    await store.dispatch('user/FETCH', app) //step 1

}