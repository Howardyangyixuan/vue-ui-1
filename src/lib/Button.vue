<template>
  <!--  <div :style="style">-->
  <button v-bind="attrs" class="vue-ui-button" :class="classes">
    <span v-if="loading" class="vue-ui-loading"/>
    <slot/>
  </button>
  <!--  </div>-->
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    inheritAttrs: false,
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: 'normal',
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    setup(props, context) {
      const {style, ...attrs} = context.attrs;
      const {theme, size, level} = props;
      // console.log({[`vue-ui-theme-${theme}`]: theme});
      const classes = computed(() => {
        return {
          [`vue-ui-theme-${theme}`]: theme,
          [`vue-ui-size-${size}`]: size,
          [`vue-ui-level-${level}`]: level,
        };
      });
      return {
        classes,
        attrs
      };
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $red: red;
  $grey: grey;
  $radius: 4px;
  .vue-ui-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    margin-left: 8px;

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.vue-ui-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.vue-ui-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);;
      }
    }

    &.vue-ui-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }

    &.vue-ui-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.vue-ui-theme-button {
      &.vue-ui-level-main {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }

      &.vue-ui-level-danger {
        background: $red;
        border-color: $red;
        color: white;

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }
    }

    &.vue-ui-theme-link {
      &.vue-ui-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }

    &.vue-ui-theme-text {
      &.vue-ui-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.vue-ui-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }

    &.vue-ui-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    &.vue-ui-theme-link, &.vue-ui-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    > .vue-ui-loading {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: vue-ui-spin 1s infinite linear;
    }
  }

  @keyframes vue-ui-spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>