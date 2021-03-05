<template>
  Vite Init
  <div>
    <router-link to="/">howard</router-link>
    |
    <router-link to="/frank">frank </router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: "App",
  }
</script>
