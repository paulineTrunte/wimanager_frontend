<template>
  <div id="butt">
    <button @click="toggle(!isDarkMode)" type="button" class="butt sticky-button1" >Toggle DarkMode</button>
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
.sticky-button1 {
  position: absolute;
  top:20px;
  left:20px;
  padding: 7px 12px;
  border-radius: 30px;
}

#butt {
  font-weight: bold;
  color: #AE8FFA;
}
</style>
