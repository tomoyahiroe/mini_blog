<template>
  <v-container class="blog-list-wrapper">
    <h1>Blog</h1>
    <BlogListItem
      v-for="content in contents"
      :key="content.title"
      :content="content"
    />
  </v-container>
</template>

<script>
export default {
  name: 'BlogList',
  data: () => ({
    contents: {},
  }),
  async created() {
    await this.$axios
      .get(this.$config.MICROCMS_API_URL + '/blog', this.header())
      .then((res) => {
        // console.log(res)
        this.contents = res.data.contents
      })
      .catch((e) => {
        console.log(e)
      })
  },
  methods: {
    header() {
      return {
        headers: { 'X-MICROCMS-API-KEY': this.$config.MICROCMS_API_KEY },
      }
    },
  },
}
</script>

<style scoped>
.blog-list-wrapper {
  width: 900px;
}

@media (max-width: 960px) {
  .blog-list-wrapper {
    width: 90%;
  }
}
</style>
