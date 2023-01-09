<template>
  <button class="btn sticky-button" data-bs-toggle="offcanvas" data-bs-target="#abgabe-create-offcanvas" aria-controls="#abgabe-create-offcanvas">
    <i class="bi bi-abgb-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="abgabe-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label"> Erstelle eine Nachricht</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
        <div class="mb-3">
          <label for="semester" class="form-label"> Semester</label>
          <input type="number" class="form-control" id="semester" v-model="semester">
        </div>
        <div class="mb-3">
          <label for="modulName" class="form-label"> Modulbezeichnung</label>
          <input type="text" class="form-control" id="modulName" v-model="modulName">
        </div>
        <div class="mb-3">
          <label for="frist" class="form-label"> Frist</label>
          <input type="date" class="form-control" id="frist" v-model="frist">
        </div>
        <div class="mb-3">
          <label for="notificationMessage" class="form-label"> Nachricht</label>
          <input type="text" class="form-control" id="notificationMessage" v-model="notificationMessage">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPerson">Submit</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbgabenHinzufuegen',
  data () {
    return {
      semester: '',
      modulName: '',
      frist: '',
      notificationMessage: ''
    }
  },
  methods: {
    createPerson(){
      console.log(this.semester)
      console.log(this.modulName)
      console.log(this.frist)
      console.log(this.notificationMessage)

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        semester: this.semester,
        modulName: this.modulName,
        frist: this.frist,
        notificationMessage: this.notificationMessage
      })

      const requestOptions = {
        method: 'POST',
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
  bottom:20px;
  right:20px;
  padding: 10px 15px;
  border-radius: 30px;
  color: #AE8FFA;
}

</style>
