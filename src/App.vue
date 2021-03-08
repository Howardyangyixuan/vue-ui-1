<template>
  <router-view/>
</template>

<script>
  import {ref, provide, readonly} from "vue"
  import {router} from "./router"

  export default {
    name: "App",
    setup() {
      const width = document.documentElement.clientWidth
      const asideVisible = ref(width > 500)
      const toggleAsideVisible = () => {
        if (width <= 500) {
          asideVisible.value = !asideVisible.value
        }
      }
      router.afterEach(toggleAsideVisible)
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
