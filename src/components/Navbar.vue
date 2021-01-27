<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand href="#">Göteborgarna</b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Hem</b-nav-item>
          <b-nav-item to="/stats">Statistik</b-nav-item>
          <b-nav-item to="/polisen">Polisen</b-nav-item>
          <b-nav-item to="/politik">Politik</b-nav-item>
          <b-nav-item to="/jobb">Jobb</b-nav-item>
          <b-nav-item to="/Om">Om</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped></style>
