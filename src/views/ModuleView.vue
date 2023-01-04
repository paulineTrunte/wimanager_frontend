<template>
  <h2>Modul-Übersicht</h2>
  <h5>Hier kannst du dir alle Module anzeigen lassen und nach verschiedenen Kriterien filtern, um dir die Suche zu erleichtern!</h5>
  <br>
  <div id="app" class="container">
    <table class="table-bordered table-striped table-hover">
      <thead>
      <th scope ="col">Semester</th>
      <th scope ="col">Modulbezeichnung</th>
      <th scope ="col">Art</th>
      <th scope ="col">Form</th>
      <th scope ="col">SWS</th>
      <th scope ="col">LP</th>
      <tr>
        <th><input class="form-control" v-model="search.semester" placeholder="Suche Semester"> </th>
        <th><input class="form-control" v-model="search.modulName" placeholder="Suche Modulbezeichnung"> </th>
        <th><input class="form-control" v-model="search.art" placeholder="Suche Art"> </th>
        <th><input class="form-control" v-model="search.form" placeholder="Suche Form"> </th>
        <th><input class="form-control" v-model="search.sws" placeholder="Suche SWS"> </th>
        <th><input class="form-control" v-model="search.lp" placeholder="Suche LP"> </th>
      </tr>
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
          const query = this.search[key].trim();
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









<!--
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














<!--
<template>
  <v-data-table hide-actions flat :headers="headers" :items="modules" :items-per-page="5">
    <template v-slot:body="{ modules }">
      <tbody>
      <tr v-for="module in modules" :key="module.id">
        <td>{{ module.id }}</td>
        <td>{{ module.id}}</td>
        <td>{{ module.art }}</td>
        <td>{{ module.form }}</td>
        <td>{{ module.lp }}</td>
      </tr>
      </tbody>
    </template>
    <template v-slot:no-results>
      <h6 class="grey--text">No data available</h6>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: [
        { text: "#", value: "" },
        { text: "id", value: "id" },
        { text: "id", value: "id" },
        { text: "art", value: "art" },
        { text: "form", value: "form" },
        { text: "lp", value: "lp" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      modules: "getListModules",
    }),
  },

  async mounted() {
    await this.fetchModules();
  },
}
</script>
-->
