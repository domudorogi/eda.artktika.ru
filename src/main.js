import {
	createApp
} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import customStyle from './assets/scss/main.scss'
import router from './router'
import store from './store'

const app = createApp(App);

app.config.globalProperties.$customStyle = customStyle;

app
	.use(router)
	.use(store)
	.use(VueAxios, axios)
	.mount('#app');