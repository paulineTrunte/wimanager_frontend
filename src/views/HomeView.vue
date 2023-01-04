<template>
  <div id="home" class="home">
    <h2>by students for students</h2>
    <h5>Hier habt Ihr die Möglichkeit euer Wirtschaftsinformatik-Studium ein wenig zu managen,
      eure Mitstudenten <br> über Fristen zu informieren und euch eigene Tasks aufzuschreiben!</h5><br>
    <img alt="dynamic" src="../assets/star-spinning.gif" height="300" width="300">
    <br><br><br><br>
    <h5>(◕‿◕) Quasi ein Online-Uni-Notizbuch (◕‿◕)</h5>

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

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
