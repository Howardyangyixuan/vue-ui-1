<template>
  <div>
    Tabs
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    setup(props, context){
      const defaults = context.slots.default()
      console.log(defaults[0]);
      defaults.forEach((item)=>{
        if(item.type !== Tab){
          throw new Error("slots中存在类型不是Tab的标签!")
        }
      })
      return{
        defaults
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>