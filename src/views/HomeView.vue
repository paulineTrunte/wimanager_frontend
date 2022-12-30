<template>
  <div id="home" class="home">
    <img alt="htw logo" src="../assets/htw-berlin-323-logo.png" height="60" width="300">
    <h1>Wirtschaftsinformatik-Manager</h1>
    <h4>Die Managing-Anwendung für Deinen Wirtschaftsinformatik-Bachelor an der HTW-Berlin</h4>
  </div>

    <div v-if="this.$root.authenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <p>
        You have successfully authenticated with Okta!
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
