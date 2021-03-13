<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="prompt" :ok="()=>{return false} ">
      <template v-slot:content>
        <u> 自定义内容 </u>
      </template>
      <template v-slot:title>
        <strong>自定义标题</strong>
      </template>
    </dialog>
  </div>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';
  import {openDialog} from '../lib/vue-ui';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      const prompt = ref(false);
      const toggle = () => {
        prompt.value = !prompt.value;
      };
      const showDialog = () => {
        openDialog({
          visible: true,
          closeOnClickOverlay: false,
          title: 'h函数',
          content: 'h函数',
          ok() { window.alert('ok'); },
          cancel() { window.alert('cancel'); },
        });
      };
      return {
        prompt,
        toggle,
        showDialog
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>