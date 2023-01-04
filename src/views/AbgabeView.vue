<template>
  <h2>Termine</h2>
  <h5>Hier kannst du anstehende Abgaben, Klausuren und wichtige Uni-Termine einsehen und selber welche erstellen!</h5>
  <br>
  <div id="app" class="container">
    <table class="table-bordered table-striped table-hover">
      <thead>
      <th scope ="col">Frist</th>
      <th scope ="col">Semester</th>
      <th scope ="col">Modulname</th>
      <th scope ="col">Was steht an?</th>
      <tr>
        <th><input class="form-control" v-model="search.frist" placeholder="Suche Semester"> </th>
        <th><input class="form-control" v-model="search.semester" placeholder="Suche Modulbezeichnung"> </th>
        <th><input class="form-control" v-model="search.modul_name" placeholder="Suche Art"> </th>
        <th><input class="form-control" v-model="search.notification_message" placeholder="Suche Form"> </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="abgb in filteredAbgaben" :key="abgb.id">
        <td>{{abgb.semester}}</td>
        <td>{{abgb.modulName}}</td>
        <td>{{abgb.art}}</td>
        <td>{{abgb.form}}</td>
        <td>{{abgb.sws}}</td>
        <td>{{abgb.lp}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

export default {
  name: 'AbgabeView',
  components: {
  },
  data () {
    return {
      search: {
        id: '',
        frist: '',
        semester: '',
        modul_name: '',
        notification_message: '',
      },
      sortBy: 'id',
      sortAsc: true,
      abgabe: [],
    }
  },
  computed: {
    filteredAbgaben: function() {
      return this.abgabe.filter(function(abgb) {
        for(const key in this.search) {
          const query = this.search[key].trim();
          if(query.length > 0) {
            if(!abgb[key].includes(query)) {
              return false;
            }
          }
        }
        return true;
      }.bind(this));
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/abgabe', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(abgb => {
        this.modules.push(abgb)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
