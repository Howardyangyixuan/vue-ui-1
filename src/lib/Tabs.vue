<template>
  <div class="vue-ui-tabs">
    <div class="vue-ui-tabs-nav">
      <div class="vue-ui-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{title}}</div>
    </div>
    <div class="vue-ui-tabs-content">
      <component class="vue-ui-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
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
      return {
        defaults,
        titles
      };
    }
  };
</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .vue-ui-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>