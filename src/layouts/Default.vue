<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="cyan darken-3" dark>
      <!-- <v-btn @click="drawer = !drawer">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>-->
      <v-app-bar-nav-icon @click="drawer = !drawer" aria-label="Drawer" />
      <span class="title ml-3 mr-5" dark>{{ $static.metadata.siteName }}</span>
      <v-spacer />
      <span class="headline font-weight-bold">{{pageTitle}}</span>

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="cyan darken-3">
      <v-list dense dark>
        <template v-for="(item, i) in items">
          <v-list-item dark :key="i" link :to="item.to" :href="item.href">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title dark>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  props: {
    pageTitle: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-home-outline", text: "Home", to: "/" },
      // { icon: "mdi-shuffle", text: "Random Show", to: "/projects/" },
      { icon: "mdi-filmstrip", text: "Movies Quotes", to: "/movies/" },
      // { divider: true },
      // { heading: "Labels" },
      {
        icon: "mdi-television-classic",
        text: "TV Series Quotes",
        to: "/series/"
      },
      // { icon: "mdi-code-tags", text: "Career Path", to: "/career/" },
      // { icon: "chat_bubble", text: "Contact", to: "" },
      {
        icon: "mdi-linkedin",
        text: "My Linkedin",
        href: "https://www.linkedin.com/in/soufiane-benzaoui/"
      },
      {
        icon: "mdi-github",
        text: "Github",
        href: "https://github.com/soubenz/quotes-static-pwa"
      }
      // { icon: "email", text: "Email me", to: "/contact/" }

      // { divider: true },
      // { icon: "archive", text: "Archive" },
      // { icon: "delete", text: "Trash" },
      // { divider: true },
      // { icon: "settings", text: "Settings" },
      // { icon: "chat_bubble", text: "Trash" },
      // { icon: "help", text: "Help" },
      // { icon: "phonelink", text: "App downloads" },
      // { icon: "keyboard", text: "Keyboard shortcuts" }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>