import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './shared/routes/routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faBars, faTimes)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app')
