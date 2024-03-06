import '@/primary/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/primary/infrastructure/router'
import { registerServices } from '@/secondary/dependency-injection'

const app = createApp(App)

registerServices(app)

app.use(createPinia())

app.use(router)

app.mount('#app')
