import { createApp, provide, h } from 'vue'
import './style.css'
import App from './App.vue'
import router from './shared/routes/routes'
import  apolloClient  from './shared/graphql/client'
import { DefaultApolloClient } from '@vue/apollo-composable'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBars, faTimes)

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})


app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
