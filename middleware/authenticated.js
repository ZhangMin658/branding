export default function ({ app, redirect }) {
  // If the user is not authenticated
  if (!app.store.getters.user) {
    return redirect(`/login`)
  }
}
