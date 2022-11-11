<template>
  <div class="home">
    <img alt="htw logo" src="../assets/htw-berlin-323-logo.png">
    <HelloWorld msg="Wirtschaftsinformatik-Manager"/>
    <h3>Die Managing-Anwendung für Deinen Wirtschaftsinformatik-Bachelor an der HTW-Berlin</h3>
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
