<template>
  <button class="btn sticky-button" data-bs-toggle="offcanvas" data-bs-target="#abgabe-delete-offcanvas" aria-controls="#abgabe-delete-offcanvas">
    <i class="bi bi-abgb-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="abgabe-delete-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label"> Lösche eine Nachricht</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
        <div class="mb-3">
          <label for="id" class="form-label"> ID des Eintrags</label>
          <input type="number" class="form-control" id="id" v-model="id">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbgabeLoeschen',
  data () {},
  methods: {
    deletePerson(){
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        id: this.id
      })

      const requestOptions = {
        method: 'DELETE',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/abgaben', requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  top:20px;
  right:20px;
  padding: 10px 15px;
  border-radius: 30px;
  color: #AE8FFA;
}

</style>
