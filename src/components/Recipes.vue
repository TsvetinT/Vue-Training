<template >
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
        <v-card>
          <v-card-media :src="card.src" height="200px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline orange--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions>

            <v-btn outline flat color="orange" @click.native="show = !show">Explore</v-btn>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    show: false,

    cards: [
      { title: 'Light', src: require('@/assets/beer1.jpg'), flex: 6, },
      { title: 'Dark', src: require('@/assets/beer1.jpg'), flex: 6 },
      { title: 'Brown', src: require('@/assets/beer2.jpg'), flex: 6 },
      { title: 'Malt', src: require('@/assets/beer3.jpg'), flex: 6 },
      { title: 'Fruit ', src: require('@/assets/beer3.jpg'), flex: 4 },
      { title: 'Honey', src: require('@/assets/beer3.jpg'), flex: 4 },
      { title: 'Strong', src: require('@/assets/beer3.jpg'), flex: 4 }
    ]
  })
}
</script>
<style scoped>
</style>
