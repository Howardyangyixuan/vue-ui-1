<template>
  <router-view/>
</template>

<script>
  import {ref, provide, readonly} from "vue"

  export default {
    name: "App",
    setup() {
      const asideVisible = ref(true)
      const toggleAsideVisible = () => {
        asideVisible.value = !asideVisible.value
        console.log("hi")
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
