<template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items " :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
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
