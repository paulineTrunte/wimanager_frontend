<template>
  <div style="width:350px;" align="center">
    <button @click="toggle(!isDarkMode)" type="button" class="btn btn-outline-dark pull right" >Toggle DarkMode</button>
  </div>
</template>

<script>
export default {
  name: 'DarkMode',

  data() {
    return {
      isDarkMode: false,
    }
  },

  methods: {
    toggle(payload){
      this.isDarkMode = payload
      document.documentElement.className = payload //false or true
      localStorage.setItem('theme', payload)
    }
  },

  mounted(){
    this.toggle(JSON.parse(localStorage.getItem('theme')))
  },

}


</script>

<style>

</style>
