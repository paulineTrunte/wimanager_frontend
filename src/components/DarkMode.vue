<template>
  <button @click="toggle(!isDarkMode)">{{isDarkMode}}</button>

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
