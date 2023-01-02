

<template>
  <div>
    <nav class="green">
      <div class="nav-wrapper">
        <span class="brand logo">Wirtschaftsinformatik Manager</span>
        <ul class="right">
          <li><a @click.prevent="login" v-if="!activeUser">Login</a></li>
          <li><a @click.prevent="logout" v-if="activeUser">Logout</a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/modules">Module</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
   await this.refreshActiveUser()
  },
  watch: {
   '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
        this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
     this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/loggedout')

    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
  }
  }


</script>

<style>
html.dark {
  color-scheme: dark;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 65px
}
body {
  background-color: #EAEDED;
}
.custom-contain {
  margin-top: 100px;
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
