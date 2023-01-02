

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/modules">Module</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

import Modul from './views/ModuleView.vue'

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Modul
  }
  }


</script>

<style>
@import '@/styles/light.css';
@import '@/styles/dark.css';

/* für den DarkMode */
*{
  background-color: var(--bg);
  color: var(--text);
}

html.dark {
  color-scheme: dark;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
