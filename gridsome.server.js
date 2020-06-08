// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = function (api) {
  api.chainWebpack((config, {
    isServer
  }) => {
    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  })
  api.loadSource(async actions => {
      const {
        data
      } = await axios({
        url: 'https://quotes-api.benzaoui.dev/graphql',
        method: 'post',
        data: {
          query: `{
      shows {
        edges {
          node {
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
            totalSeasons
            year
            poster
            quotes {
              edges {
                node {
                  id
                  text
                  character { id name}
                }
              }
            }
           
          }
        }
      }
    }`
        }
      })
      const series = actions.addCollection('Series')
      const movies = actions.addCollection('Movies')
      data.data.shows.edges.forEach(({
        node
      }) => {
        if (node.type == "series") {
          series.addNode({
            id: node.id,
            country: node.country,
            title: node.title,
            type: node.type,
            language: node.language,
            metascore: node.metascore,
            production: node.production,
            runtime: node.runtime,
            rated: node.rated,
            released: node.released,
            title: node.title,
            totalSeasons: node.totalSeasons,
            year: node.year,
            poster: node.poster,
            quotes: node.quotes,
            awards: node.awards,
            director: node.director,
            genre: node.genre
          })
        } else {
          movies.addNode({
            id: node.id,
            country: node.country,
            title: node.title,
            type: node.type,
            quotes: node.quotes,
            language: node.language,
            metascore: node.metascore,
            production: node.production,
            runtime: node.runtime,
            rated: node.rated,
            released: node.released,
            title: node.title,
            year: node.year,
            poster: node.poster,
            awards: node.awards,
            director: node.director,
            genre: node.genre
            // id: quote.image.slice(-25, -5),
            //  image: path.resolve(quote.image),
            //  id: quote.text.slice(0, 30),
            //  character: quote.character,
            //  series: actions.store.createReference(tvseries),
            //  text: quote.text

          })
        }
      })


      // // const node = data.shows.edges[0].node
      // const layouts = actions.addCollection('Users')
      // data.shows.edges.forEach(({
      //   node
      // }) => {

      //   createPage({
      //     path: `/shows/${node.title.toLowerCase().replace(/\(/g, '').replace(/\)/g, '').replace(/\s+/g, '-')}`,
      //     component: './src/templates/Shows.vue',
      //     context: {
      //       id: node.id
      //     }
      //   })
      // })
      // node.quotes.edges.forEach((quote, index) => {
      //   console.log(index)
      //   console.log(node.id)

      //   createPage({
      //     path: `/shows/${node.title.toLowerCase().replace(/\s+/g, '-')}/${index+1}`,
      //     component: './src/templates/Quotes.vue',
      //     context: {
      //       id: quote.node.id
      //     }
      //   })



    }
    // }
  )

  // createPage({
  //   path: `/blog/${node.full_slug}`,
  //   component: './src/templates/StoryblokEntry.vue',
  //   context: {
  //     id: node.id
  //   }
  // })

  // })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  //   })
  // }


}