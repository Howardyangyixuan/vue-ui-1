<template>
  <div :style="style">
    <button v-bind="attrs">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false,
    name: 'Button',
    setup(props, context) {
      const {style, ...attrs} = context.attrs;
      return {
        style,
        attrs
      };
    }
  };
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid red;
  }
</style>