<template>
  <h2>Termine</h2>
  <h5>Hier kannst du anstehende Abgaben, Klausuren und wichtige Uni-Termine einsehen und selber welche erstellen!</h5>
  <br>
  <div class="container-fluid">
  <AbgabenRender :abgabe="this.abgabe"></AbgabenRender>
  </div>
  <AbgabenHinzufuegen></AbgabenHinzufuegen>
  <AbgabeLoeschen></AbgabeLoeschen>
  <AbgabeAendern></AbgabeAendern>
  <RefreshButton></RefreshButton>
  </template>

<script>
import AbgabenRender from "@/components/AbgabenRender";
import AbgabenHinzufuegen from "@/components/AbgabenHinzufuegen";
import AbgabeLoeschen from "@/components/AbgabeLoeschen";
import AbgabeAendern from "@/components/AbgabeAendern";
import RefreshButton from "@/App";
import fetch from 'node-fetch'
export default {
  name: 'AbgabeView',
  components: {
    RefreshButton,
    AbgabeAendern,
    AbgabeLoeschen,
    AbgabenRender,
    AbgabenHinzufuegen
  },
  data () {
    return {
      sortBy: 'frist',
      sortAsc: true,
      abgabe: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/abgaben', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(abgb => {
        this.abgabe.push(abgb)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
