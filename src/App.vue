<template>
  <router-view/>
</template>

<script>
  import {ref, provide, readonly} from "vue"

  export default {
    name: "App",
    setup() {
      const width = document.documentElement.clientWidth
      const asideVisible = ref(width >= 500)
      const toggleAsideVisible = () => {
        asideVisible.value = !asideVisible.value
      }
      provide("asideVisible", readonly(asideVisible)
      )
      provide("toggleAsideVisible", toggleAsideVisible)
      return {
        asideVisible,
      }
    },
    methods: {}
  }
</script>
