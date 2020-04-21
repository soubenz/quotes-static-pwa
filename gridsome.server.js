// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({
    addCollection
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })


  api.createPages(async ({
    graphql,
    createPage
  }) => {
    const {
      data
    } = await graphql(`{
      shows {
        edges {
          node {
            id
            country
            title
            quotes {
              edges {
                node {
                  id
                }
              }
            }
           
          }
        }
      }
    }`)
    const node = data.shows.edges[0].node
    // data.shows.edges.forEach(({
    //   node
    // }) => {

    createPage({
      path: `/shows/${node.id}`,
      component: './src/templates/Shows.vue',
      context: {
        id: node.id
      }
    })
    node.quotes.edges.forEach((quote, index) => {
      console.log(index)
      console.log(node.id)

      createPage({
        path: `/shows/${node.title.toLowerCase().replace(/\s+/g, '-')}/${index+1}`,
        component: './src/templates/Quotes.vue',
        context: {
          id: quote.node.id
        }
      })




    })

    // createPage({
    //   path: `/blog/${node.full_slug}`,
    //   component: './src/templates/StoryblokEntry.vue',
    //   context: {
    //     id: node.id
    //   }
    // })

  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  //   })
  // }


}