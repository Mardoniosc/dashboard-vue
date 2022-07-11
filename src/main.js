import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'
import 'animate.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.use(store)
app.use(Toast, { position: POSITION.TOP_RIGHT })
app.use(router).mount('#app')
