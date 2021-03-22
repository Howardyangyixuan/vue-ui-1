<template>
  <div class="vue-ui-tabs">
    <div class="vue-ui-tabs-nav">
      <div class="vue-ui-tabs-nav-item" @click="select(title)" v-for="(title,index) in titles" :key="index"
           :ref="el => { if (el) navItems[index] = el }"
           :class="{selected:title===selected}">{{title}}
      </div>
      <div class="vue-ui-tabs-nav-indicator" ref="indicator"/>
    </div>
    <div class="vue-ui-tabs-content">
      <component class="vue-ui-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"
                 :visible="titles[index]===selected"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {ref, onBeforeUpdate, onMounted} from 'vue';

  export default {
    name: 'Tabs',
    props: ['selected'],
    setup(props, context) {
      const navItems = ref<HTMLDivElement[]>([]);
      const indicator = ref<HTMLDivElement>();
      onMounted(() => {
        const divs = navItems.value;
        const result = divs.find(div => div.classList.contains('selected'));
        const {width} = result.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
      });
      onBeforeUpdate(() => {
        navItems.value = [];
      });
      const defaults = context.slots.default();
      defaults.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error('slots中存在类型不是Tab的标签!');
        }
      });
      const titles = defaults.map((item) => {
        return item.props.title;
      });
      const select = (title: String) => {
        context.emit('update:selected', title);
      };
      return {
        defaults,
        titles,
        select,
        navItems,
        indicator
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
      position: relative;

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

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
      }
    }

    &-content {
      padding: 8px 0;
    }

  }
</style>