<template>
  <div v-if="visible">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tab',
    props: ['visible']
  };
</script>

<style lang="scss" scoped>

</style>