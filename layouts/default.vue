<template>
  <v-app class="bg">
    <v-app-bar app flat dark>
      <v-container class="py-0 fill-height">
        <nuxt-link to="/" class="site-title mr-8">
          <h2>mini_blog</h2>
        </nuxt-link>

        <div v-for="link in links" :key="link.name" class="header-link mr-4">
          <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
        </div>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="main-content grey lighten-2">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      links: [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style>
body {
  font-family: serif;
}

p {
  font-size: 18px;
  line-height: 1.7;
}

.bg {
  box-sizing: border-box;
  background-color: #bdbdbd;
  width: 100vw;
  color: #030303;
}

.header-link a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
}

.site-title {
  text-decoration: none;
}

.site-title h2 {
  color: white;
}

.main-content {
  width: 100vw;
  margin: 0 auto;
}
</style>
