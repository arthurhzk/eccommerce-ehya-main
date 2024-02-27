import '@/primary/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/primary/infrastructure/router'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
