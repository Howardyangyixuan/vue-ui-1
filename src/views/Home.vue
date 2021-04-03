<template>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Yyx UI</h1>
      <h2>Vue UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-read"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    name: 'Home.vue',
    components: {TopNav}
  };
</script>

<style lang="scss" scoped>
  $border-radius: 30px;
  $yellow: #f7ece2;

  .topNavAndBanner {
    background: rgb(34, 104, 123);
    background: linear-gradient(135deg, rgba(34, 104, 123, 1) 0%, rgba(75, 121, 132, 1) 30%, rgba(195, 170, 159, 1) 70%, rgba(248, 192, 171, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: $yellow;
        color: black;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .features {
    margin: 64px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
      width: 800px;
      >ul{
        >li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
      >ul{
        >li{
          width: 33.3333%;
        }
      }
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      > li {
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
        "icon title"
        "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text
        }
      }
    }
  }
</style>