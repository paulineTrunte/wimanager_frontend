<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">WI-Manager</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <router-link calss="nav-link" to="/">Home</router-link>
        <router-link calss="nav-link" to="/about">About</router-link>
        <router-link calss="nav-link" to="/persons">Profile</router-link>
    </div>
  </div>
</div>
</nav>
</template>

<script>
export default {
  name: 'Navbar-Home'
}
</script>

<style scoped>
</style>
