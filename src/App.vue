<template>
  <div id="app">
    <v-card color="grey lighten-4" flat height="200px">
      <v-toolbar color="grey darken-1" dark>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="/recipes">Recipes</v-btn>
          <v-btn flat to="/about">About Us</v-btn>
          <!--  <v-btn flat to="/">Test</v-btn> -->
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-text-field prepend-icon="search" v-model="searchText" solo append-icon="cancel"></v-text-field>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    goToUsers () {
      this.$router.push("/recipes");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
