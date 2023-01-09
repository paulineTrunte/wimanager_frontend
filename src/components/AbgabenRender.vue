<template>
  <div class="card lila">
    <div class="col" v-for="abgb in abgabe" :key="abgb.id">
      <div class="card-header">Bis {{abgb.frist}}</div>
        <div class="card-body">
        <h5 class="card-title">Semester {{abgb.semester}} - {{abgb.modulName}}</h5>
        <p class="card-text">{{abgb.notificationMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbgabenRender',
  props: {
    abgabe: {
      type: Array,
      required: true
    }
  },
}

</script>

<style scoped>
.lila {
  color: #AE8FFA;
}
.pink {
  color: #e69fc7;
}

</style>
