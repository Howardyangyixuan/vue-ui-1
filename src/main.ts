import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Howard from './components/Howard.vue';
import Frank from './components/Frank.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Howard},
    {path: '/frank', component: Frank}
  ]
});
const app = createApp(App)
app.use(router)
app.mount('#app');
