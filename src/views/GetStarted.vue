<template>
  <article class="markdown-body" v-html="md" />
</template>

<script lang="ts">
  import md from '../markdown/get-started.md';

  export default {
    data() {
      return {
        md
      };
    },
    name: 'GetStarted'
  };
</script>

<style lang="scss" scoped>

</style>