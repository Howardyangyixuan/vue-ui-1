<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="prompt" title="自定义title" :ok="()=>{return false}">
      自定义内容
    </dialog>
  </div>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      const prompt = ref(false);
      const toggle = () => {
        prompt.value = !prompt.value;
      };
      return {
        prompt,
        toggle
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>