<template>
  <div>
    <div v-for="(title,idx) in titles" :key="idx">{{title}}</div>
    <component v-for="(d,idx) in defaults" :key="idx" :is="d"/>
</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error('slots中存在类型不是Tab的标签!');
        }
      });
      const titles = defaults.map((item) => {
        return item.props.title;
      });
      console.log(titles);
      return {
        defaults,
        titles
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>