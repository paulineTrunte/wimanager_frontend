<template>
  <div class="home">
    <img alt="htw logo" src="../assets/htw-berlin-323-logo.png" height="60" width="300">
    <HelloWorld msg="Wirtschaftsinformatik-Manager"/>
    <h4>Die Managing-Anwendung für Deinen Wirtschaftsinformatik-Bachelor an der HTW-Berlin</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
