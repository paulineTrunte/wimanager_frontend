<template>
  <h2>Modul-Übersicht</h2>
  <h5>Hier kannst du dir alle Module anzeigen lassen und nach verschiedenen Kriterien filtern, um dir die Suche zu erleichtern!</h5>
  <br>
  <div id="app" class="container">
    <th><input class="form-control" v-model="search.modulName" placeholder="Suche Modulbezeichnung"> </th>
    <table class="table-bordered table-striped table-hover">
      <thead>
      <th scope ="col">Semester</th>
      <th scope ="col">Modulbezeichnung</th>
      <th scope ="col">Art</th>
      <th scope ="col">Form</th>
      <th scope ="col">SWS</th>
      <th scope ="col">LP</th>
      </thead>
      <tbody>
      <tr v-for="mod in filteredModules" :key="mod.id">
        <td>{{mod.semester}}</td>
        <td>{{mod.modulName}}</td>
        <td>{{mod.art}}</td>
        <td>{{mod.form}}</td>
        <td>{{mod.sws}}</td>
        <td>{{mod.lp}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import fetch from 'node-fetch'

export default {
  name: 'ModuleView',
  components: {
  },
  data () {
    return {
      search: {
        id: '',
        semester: '',
        modulName: '',
        art: '',
        form: '',
        sws: '',
        lp: '',
      },
      sortBy: 'id',
      sortAsc: true,
      modules: [],
    }
  },
  computed: {
    filteredModules: function() {
      return this.modules.filter(function(mod) {
        for(const key in this.search) {
          const query = this.search[key];
          if(query.length > 0) {
            if(!mod[key].includes(query)) {
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

    fetch('http://localhost:8080/api/v1/modules', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(mod => {
        this.modules.push(mod)
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
