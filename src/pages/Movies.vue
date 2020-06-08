<template>
  <Layout>
    <v-row>
      <v-col cols="12" sm="4" v-for="series in $page.allMovies.edges" :key="series.node.id">
        <v-card :to="getPageUrl(series.node.title)">
          <v-card-title class="d-flow justify-center">{{series.node.title}}</v-card-title>
          <v-card-text>
            <v-img contain height="400px" :src="series.node.poster" :lazy-src="series.node.poster">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon color="#FE4A49" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                  </v-scale-transition>
                </v-row>
              </template>
            </v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <Pager :info="$page.allMovies.pageInfo" linkClass="pager__link" class="pager" />
  </Layout>
</template>
<page-query>
query allMovies   ($page: Int) {
         
       allMovies (perPage: 12, page: $page)  @paginate {
    pageInfo {
      totalPages
      currentPage
    }
         
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
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Movies Quotes"
  },
  components: { Pager },
  methods: {
    getPageUrl(title) {
      return `/movies/${title
        .toLowerCase()
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .replace(/\s+/g, "-")
        .replace(/:/g, "")}`;
    }
  }
};
</script>
<style lang="scss">
.pager {
  display: inline-block;
  width: 100%;
  text-align: center;

  &__link {
    color: #fe4a49;
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    }
  }
}

.active {
  background-color: var(--bg-content-color);
  border-radius: 5px;
}
</style>