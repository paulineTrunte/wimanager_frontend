<template>
  <img alt="dynamic" src='../src/assets/Ueberschrift1.png'>
  <div id="nav">
    <p style="color: #AE8FFA">
      ✧ <router-link to="/">Home</router-link> ✧
      <router-link to="/modules">Module</router-link> ✧
      <router-link to="/abgabe">Termine</router-link> ✧
      <router-link to="/about">About</router-link> ✧
    </p>
  </div>
  <DarkMode></DarkMode>
  <router-view/>
</template>

<script>

import DarkMode from './components/DarkMode.vue'

export default {
  name: 'app',
  components: {
    DarkMode
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
  color: #e69fc7;
}
#nav a.router-link-exact-active {
  color: #AE8FFA;
}

</style>
