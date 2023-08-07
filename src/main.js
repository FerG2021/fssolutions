import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// PRIME VUE
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'          // theme
import 'primevue/resources/primevue.min.css'                    // core css
import 'primeicons/primeicons.css'                              // icons

// BUTTON
import Button from "primevue/button"

createApp(App)
.component('Button', Button)
.use(PrimeVue)
.mount('#app')
