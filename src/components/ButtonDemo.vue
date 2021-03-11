<template>
  <div>
    ButtonDemo
    <Button theme="button">button1</Button>
    <Button theme="text">button2</Button>
    <Button theme="link">button3</Button>
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