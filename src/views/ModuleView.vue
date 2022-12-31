<template>
  <h4>Auf dieser Seite können Sie sich alle Module des Bachelor-Studiengangs Wirtschaftsinformatik in einer Tabelle anzeigen lassen und nach einzelnen Modulen suchen.</h4>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="mod in modules" :key="mod.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{mod.art}} </h5>
            <p class="card-text">
              {{mod.art}} hallo hallo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ModuleView',
  data () {
    return {
      modules: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/modules', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
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
<!--
<template>
  <h4>Auf dieser Seite können Sie sich alle Module des Bachelor-Studiengangs Wirtschaftsinformatik in einer Tabelle anzeigen lassen und nach einzelnen Modulen suchen.</h4>
  <div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Semester</th>
        <th>Modulbezeichnung</th>
        <th>Art</th>
        <th>Form</th>
        <th>SWS</th>
        <th>Lp</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="modul in modules" :key="modul.id">
        <td>{{modul.id}}</td>
        <td>{{modul.semester}}</td>
        <td>{{modul.name}}</td>
        <td>{{modul.art}}</td>
        <td>{{modul.form}}</td>
        <td>{{modul.sws}}</td>
        <td>{{modul.lp}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModuleView',
  data () {
    return {
      modules: {}
    }
  },
  methods: {
    loadModules () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/modules'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(modul => {
          this.modules[modul.id] = modul
        }))
        .catch(error => console.log('error', error))
    },
    mounted () {
    }
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>

<template>
  <h4>Auf dieser Seite können Sie sich alle Module des Bachelor-Studiengangs Wirtschaftsinformatik in einer Tabelle anzeigen lassen und nach einzelnen Modulen suchen.</h4>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="mod in module" :key="mod.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{mod.art}} </h5>
            <p class="card-text">
              {{mod.art}} hallo hallo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ModuleView',
  data () {
    return {
      module: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/modules', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
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
-->
