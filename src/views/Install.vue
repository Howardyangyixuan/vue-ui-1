<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
  import md from '../markdown/install.md';

  export default {
    data() {
      return {
        md
      };
    },
    name: 'Install'
  };
</script>

<style lang="scss" scoped>

</style>