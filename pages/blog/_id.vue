<template>
  <v-container class="blog-content-wrapper">
    <!-- <div class="blog-content-thumbnail-wrapper mx-4 my-4">
      <img
        :src="content.thumbnail.url"
        alt="サムネイル画像"
        class="blog-content-thumbnail"
      />
    </div> -->
    <div class="blog-content-title">{{ content.title }}</div>
    <BlogContent :content="content.content" />
    {{ content }}
  </v-container>
</template>

<script>
export default {
  name: 'BlogArticle',
  data: () => ({
    content: {},
  }),
  created() {
    const id = this.$route.params.id
    this.$axios
      .get(this.$config.MICROCMS_API_URL + '/blog/' + id, this.header())
      .then((res) => {
        this.content = res.data
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
.blog-content-wrapper {
  width: 50%;
  background-color: #fff;
}

.blog-content-thumbnail {
  width: 100%;
  max-width: 100%;
}

.blog-content-title {
  display: inline-box;
  text-align: center;
  font-size: 2rem;
}

@media (max-width: 960px) {
  .blog-content-wrapper {
    width: 90%;
  }
}
</style>
