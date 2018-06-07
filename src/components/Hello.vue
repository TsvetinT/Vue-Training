<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
 <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
      <v-carousel hide-controls>
        <v-carousel-item v-for="(item,i) in items " :src="item.src" :key="i"></v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          src: require('@/assets/beer1.jpg'),
        },
        {
          src: require('@/assets/beer2.jpg'),
        },
        {
          src: require('@/assets/beer3.jpg'),
        },
        {
          src: require('@/assets/beer4.jpg')
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
