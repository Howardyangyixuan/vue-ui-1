import {createApp} from 'vue';
import './lib/vue-ui.scss';
import App from './App.vue';
import './index.scss';
import {router} from './router';
import './lib/svg.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
