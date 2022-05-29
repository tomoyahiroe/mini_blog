<template>
  <v-hover v-slot="{ hover }">
    <v-card class="my-4" :elevation="hover ? 12 : 2">
      <nuxt-link :to="'/blog/' + content.id" class="link-area d-flex">
        <div class="thumbnail-wrapper mx-4 my-4">
          <img
            :src="content.thumbnail.url + '?fit=crop&w=270&h=180'"
            alt="サムネイル画像"
            class="thumbnail"
          />
        </div>
        <div class="ml-10 my-4">
          <h2 class="article-title">{{ content.title }}</h2>
          <div class="create-date d-flex align-end">
            <v-icon> mdi-clock-outline </v-icon>
            <div>
              {{ new Date(content.createdAt).toLocaleDateString() }}
            </div>
          </div>
          <div
            v-for="category in content.category"
            :key="category"
            class="category d-inline-flex"
          >
            <v-chip class="mr-2 mt-2">{{ category }}</v-chip>
          </div>
        </div>
      </nuxt-link>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'BlogListItem',
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
}
</script>

<style scoped>
.thumbnail {
  border: 10px solid #e0e0e0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.article-title {
  color: #030303;
}

.create-date {
  color: #030303;
  height: 60%;
}

.link-area {
  text-decoration: none;
  text-decoration-color: #030303;
}
</style>
