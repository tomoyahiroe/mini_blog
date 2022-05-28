<template>
  <v-carousel
    cycle
    height="100%"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2 font-weight-black">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'Articles Worth Reading',
        'Articles Worth Reading',
        'Articles Worth Reading',
        'Articles Worth Reading',
        'Articles Worth Reading',
      ],
    }
  },
}
</script>
