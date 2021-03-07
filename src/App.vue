<template>
  <router-view/>
</template>

<script>
  import {ref, provide} from "vue"

  export default {
    name: "App",
    setup() {
      const visible = ref(true)
      provide("x", visible)
      return {
        visible
      }
    },
    created() {
      console.log("app:", this.visible)
    },
    methods: {}
  }
</script>
