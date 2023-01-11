<template>
    <div class="col" v-for="abgb in abgabe" :key="abgb.id">
      <div class="card pinkk">
      <div class="card-header lilaSchrift">Bis {{abgb.frist}}</div>
        <div class="card-body">
        <h5 class="card-title">Semester {{abgb.semester}} - {{abgb.modulName}}</h5>
        <p class="card-text">{{abgb.notificationMessage}}</p>
      </div>
      <div class="card-body ">
        <p class="card-text">ID: {{abgb.id}}</p>
      </div>
      <br><br><br>
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
.pinkk {
  color: #e69fc7;
}
.pinkSchrift {
  font-weight: bold;
  color: #e69fc7;
}
.lilaSchrift {
  font-weight: bold;
  color: #AE8FFA;
}

</style>
