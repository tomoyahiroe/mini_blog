<template>
  <div>
    <div v-html="content"></div>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
}
</script>
