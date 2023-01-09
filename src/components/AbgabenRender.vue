<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="abgb in abgabe" :key="abgb.id">
      <div class="card h-100">
        <img alt="dynamic" src="../assets/logo.png" height="230" width="230">
        <div class ="card-body">
          <h5 class="card-title">{{abgb.semester}}</h5>
          <p class="card-text">
            {{abgb.notification_message}}
          </p>
        </div>
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
