<template>
    <div class="login">
      <h2>This is an Login Page</h2>
      <div id="okta-signin-container"></div>
    </div>
  </template>
  
  <script>
  import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
  import { oktaSignIn } from '../okta'
  export default {
    name: 'LoginView',
    mounted: function () {
      this.$nextTick(function () {
        oktaSignIn.showSignInAndRedirect(
          { el: '#okta-signin-container' }
        )
      })
    },
    unmounted () {
      // Remove the widget from the DOM on path change
      oktaSignIn.remove()
    }
}
  </script>
  
<style scoped>
</style>
