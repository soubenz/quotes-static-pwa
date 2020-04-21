// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'TV Series and Movies Quotes',
  plugins: [{
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },

      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/assets/logo.png",
        name: "TV Series and Movies Quotes",
        short_name: "App",
        theme_color: "#FFFFFF",
        lang: "en",
      }
    },
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://quotes-api.benzaoui.dev/graphql',
        fieldName: 'shows',
        typeName: 'API',

      },
    },

  ]
}