<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#abgabe-create-offcanvas" aria-controls="#abgabe-create-offcanvas">
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
          <input type="text" class="form-control" id="semester">
        </div>
        <div class="mb-3">
          <label for="modul_name" class="form-label"> Modulbezeichnung</label>
          <input type="text" class="form-control" id="modul_name">
        </div>
        <div class="mb-3">
          <label for="frist" class="form-label"> Frist</label>
          <input type="date" class="form-control" id="frist">
        </div>
        <div class="mb-3">
          <label for="notification_message" class="form-label"> Nachricht</label>
          <input type="text" class="form-control" id="notification_message">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit">Submit</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbgabenHinzufuegen'
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
