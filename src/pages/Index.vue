<template>
  <Layout>
    <v-row class="d-flow justify-center my-4">
      <v-btn
        text
        class="title d-flow justify-center"
        to="/series"
      >TV Series Quotes: See {{$page.allSeries.edges.length}} More</v-btn>
    </v-row>
    <v-card class="ma-sm-12">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="(item, i) in sampleSeries"
            :key="i"
            class="d-flex child-flex"
            cols="6"
            sm="4"
          >
            <v-card flat tile class="d-flex">
              <v-img
                :src="item.node.poster"
                :lazy-src="item.node.poster"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon color="#FE4A49" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                    </v-scale-transition>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-row class="d-flow justify-center my-4">
      <v-btn
        text
        class="title d-flow justify-center"
        to="/movies"
      >Movies Quotes: See {{$page.allMovies.edges.length}} More</v-btn>
    </v-row>

    <v-card class="ma-sm-12">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="(item, i) in sampleMovies"
            :key="i"
            class="d-flex child-flex"
            cols="6"
            sm="4"
          >
            <v-card flat tile class="d-flex">
              <v-img
                :src="item.node.poster"
                aspect-ratio="1"
                :lazy-src="item.node.poster"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon color="#FE4A49" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                    </v-scale-transition>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-expand-transition>
      <v-sheet v-if="modelMovies != null" color="grey lighten-4" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="title">Selected {{ modelMovies }}</h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </Layout>
</template>
<page-query>
query allSeries {
       allSeries  {
         edges {
           node {
            country
            title
            id
            type
            poster
            year
            quotes {edges {node {text} }}
         
            
           }
         }
       }
       
       allMovies{
         edges {
           node {
            country
            title
            id
            type
            poster
            year
            quotes {edges {node {text} }}
         
            
           }
         }
       }    
     }

</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      modelSeries: null,
      modelMovies: null,
      placeholder: false
    };
  },
  computed: {
    sampleSeries() {
      // let RandomData = this.$page.quotes.edges[
      // Math.floor(Math.random() * this.$page.quotes.edges.length)
      // ];
      let count = 6;
      let _arr = [...this.$page.allSeries.edges];
      return [...Array(count)].map(
        () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
      );
    },
    sampleMovies() {
      // let RandomData = this.$page.quotes.edges[
      // Math.floor(Math.random() * this.$page.quotes.edges.length)
      // ];
      let count = 6;
      let _arr = [...this.$page.allMovies.edges];
      return [...Array(count)].map(
        () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
      );
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
