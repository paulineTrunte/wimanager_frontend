<template>
  <button class="btn sticky-button" data-bs-toggle="offcanvas" data-bs-target="#abgabe-change-offcanvas" aria-controls="#abgabe-change-offcanvas">
    <i class="bi bi-abgb-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="abgabe-change-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label"> Ändere den Nachrichten-Inhalt eines Eintrags</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
        <div class="mb-3">
          <label for="id" class="form-label"> ID des Eintrags</label>
          <input type="number" class="form-control" id="id" v-model="id">
        </div>
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
          <label for="notificationMessage" class="form-label"> Neue Nachricht</label>
          <input type="text" class="form-control" id="notificationMessage" v-model="notificationMessage">
        <div class="mt-5">
          <button class="btn lila me-3" type="button" @click="changeAbgabe(id)">Ändern</button>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbgabeAendern',
  data () {
    return {
      id: '',
      semester: '',
      modulName: '',
      frist: '',
      notificationMessage: ''
    }
  },
  methods: {
    changeAbgabe(id){
      const url = "http://localhost:8080/api/v1/abgaben/" + id
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        id: this.id,
        semester: this.semester,
        modulName: this.modulName,
        frist: this.frist,
        notificationMessage: this.notificationMessage
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(url, requestOptions)
        .then(() => this.status = 'Change successful')
        .catch(error => console.log('error', error));
    }
  }
}
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

</style>
