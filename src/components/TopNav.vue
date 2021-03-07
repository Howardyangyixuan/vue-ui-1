<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAsideVisible"></span>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    name: 'TopNav',
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAsideVisible = inject<Ref<boolean>>('toggleAsideVisible');
      return {
        asideVisible,
        toggleAsideVisible
      };
    }
  };
</script>

<style lang="scss" scoped>
  .topNav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;


    > .logo {
      max-width: 6em;
      margin-right: auto;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    > .toggleAside {
      width: 24px;
      height: 24px;
      background: red;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }

</style>