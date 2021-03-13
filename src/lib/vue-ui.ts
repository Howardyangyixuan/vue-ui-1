import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const {title, content, ok, cancel, closeOnClickOverlay} = options;
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog,
        {
          visible: true, 'onUpdate:visible': (newValue) => {
            if (newValue === false) close();
          },
          closeOnClickOverlay,
          ok,
          cancel,
        },
        {title, content}
      );
    }
  });
  app.mount(div);
};