<template>
  <div>
    TabsDemo
  </div>
  <h1>示例一</h1>
  {{x}}
  <Tabs v-model:selected="x">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';
  import {ref} from 'vue';

  export default {
    name: 'TabsDemo',
    components: {Tab, Tabs},
    setup() {
      const x = ref('导航一');
      return {x};
    }
  };
</script>

<style lang="scss" scoped>

</style>