<template>
  <div>
    SwitchDemo
    <Switch :value="value" @input="value = $event" />
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import { ref } from 'vue';

  export default {
    name: 'SwitchDemo',
    setup(){
      const value = ref(false)
      return {
        value
      }
    },
    components: {Switch}
  };
</script>

<style lang="scss" scoped>

</style>