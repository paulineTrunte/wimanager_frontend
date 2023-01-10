<template>
  <div id="butt">
    <button @click="this.$router.go()" type="button" class="butt sticky-button2" >Refresh</button>
  </div>
</template>


<script>
</script>

<style scoped>
.sticky-button {
  position: fixed;
  top:20px;
  right:100px;
  padding: 10px 15px;
  border-radius: 30px;
  color: #AE8FFA;
}
.lila {
  color: #AE8FFA;
}
.pinkk {
  color: #e69fc7;
}
.sticky-button2 {
  position: absolute;
  top:65px;
  left:20px;
  padding: 7px 12px;
  border-radius: 5050px;
}

#butt {
  font-weight: bold;
  color: #AE8FFA;
}

</style>
