<template>
  <layout>
    <v-card>
      <v-card-title class="d-flow justify-center">{{$page.series.title}}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col offset-sm="1" cols="12" sm="4">
            <v-row>
              <v-col class="font-weight-bold">Released</v-col>
              <v-col>{{$page.series.released}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Country of Production</v-col>
              <v-col>{{$page.series.country}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Language</v-col>
              <v-col>{{$page.series.language}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Total Seasons</v-col>
              <v-col>{{$page.series.totalSeasons}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Production</v-col>
              <v-col>{{$page.series.production}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Runtime</v-col>
              <v-col>{{$page.series.runtime}}</v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">Rated</v-col>
              <v-col>{{$page.series.rated}}</v-col>
            </v-row>

            <v-row>
              <v-col class="font-weight-bold">Awards</v-col>
              <v-col>{{$page.series.awards}}</v-col>
            </v-row>
          </v-col>
          <v-col cols="12" offset-sm="3" sm="4">
            <v-img :src="$page.series.poster" :lazy-src="$page.series.poster">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon color="#FE4A49" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                  </v-scale-transition>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-iterator :items="$page.series.quotes.edges" :items-per-page="5">
              <template v-slot:header>
                <v-toolbar class="mb-2" color="#FE4A49" dark>
                  <v-toolbar-title>Quotes</v-toolbar-title>
                </v-toolbar>
              </template>
              <template v-slot:default="{items}">
                <v-row v-for="item in items" :key="item.node.id" justify="center">
                  <v-col cols="12" sm="8">
                    <v-card raised color="cyan lighten-1" dark>
                      <v-card-text
                        dark
                        class="display-1 font-italic white--text"
                      >{{ item.node.text }}</v-card-text>
                      <v-card-actions
                        class="font-weight-bold d-flow justify-end"
                      >{{ item.node.character.name }}</v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </layout>
</template>

<page-query>
query ($id: ID!) {
  series(id: $id) {
    id
    country
    title
    type
    awards
    director
    genre
    language
    metascore
    production
    runtime
    rated
    released
    title
    year
    poster
    quotes { edges { node {text character  { name}}}}
  }
}
</page-query>


<script>
export default {
  data() {
    return {};
  }
};
</script>
