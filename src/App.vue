<template>
  <div id="app">
    <div class="columns">
      <div class="column is-one-fifth">
        <Menu />
      </div>
      <div class="column">
        <Search/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./pages/Search.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "app",
  components: {
    Search,
    Menu
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
.columns {
  height: auto;
  min-height: 100%;
  margin: 0!important;
}
.column {
  padding: 0!important;
}
.active {
  color:crimson;
}
</style>
