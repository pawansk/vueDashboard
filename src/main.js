import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css';
//import './styles/my-styles.scss';



createApp(App).use(store).use(router).mount('#app')