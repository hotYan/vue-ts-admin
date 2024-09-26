import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// vue Router
import router from "@/router"// import { setupRouter } from "@/router";
const app = createApp(App)
app.use(router)//setupRouter(app)
app.mount('#app')
