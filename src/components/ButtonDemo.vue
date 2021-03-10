<template>
  <div>
    ButtonDemo
    <Button>插槽实现<Button/>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';
  export default {
    name: 'ButtonDemo',
    components: {Button},
    Component:'Button'
  };
</script>

<style lang="scss" scoped>

</style>