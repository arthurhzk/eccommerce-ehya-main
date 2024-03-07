import '@/primary/index.css'
import { registerServices } from '@/secondary/services/dependency-injection'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/primary/infrastructure/router'

const app = createApp(App)

registerServices(app)

app.use(createPinia())

app.use(router)

app.mount('#app')
