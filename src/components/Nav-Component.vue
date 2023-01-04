<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/modules">Module</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </nav>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/modules">Module</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Nav-Component'
}
</script>

<style scoped>
</style>
