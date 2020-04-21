<template>
  <layout>
    <v-card>
      <div>{{$page.shows.edges[0].node}}</div>
      <v-btn block>sds</v-btn>
    </v-card>
  </layout>
</template>

<page-query>
       query shows ($id: ID) {
         
       shows  (id: $id){
         edges {
           node {
            country
            title
            id
         
            
           }
         }
       }
     
    
     }
    
</page-query