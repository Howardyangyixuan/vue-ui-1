<template>
  <div>
    ButtonDemo
    <Button @click="fn">插槽实现</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup() {
      const fn = () => {
        console.log('hi');
      };
      return {fn};
    }
  };
</script>

<style lang="scss" scoped>

</style>