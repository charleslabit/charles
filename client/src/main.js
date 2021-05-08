import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import myPlugin from './plugins/myMixins'
import firebase from 'firebase/firebase-app'
import {firestorePlugin} from 'vuefire'
import Clipboard from 'v-clipboard'



// const firebaseConfig = {
//   apiKey: "AIzaSyApHy8c7efqP8s7G14ZF5QQFoxYwmT_jLI",
//   authDomain: "portfolio-d7e21.firebaseapp.com",
//   projectId: "portfolio-d7e21",
//   storageBucket: "portfolio-d7e21.appspot.com",
//   messagingSenderId: "680062903707",
//   appId: "1:680062903707:web:2a9357814c843a07a22d3e",
//   measurementId: "G-YXW2RE1NHP"
// };
// firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(myPlugin);
Vue.use(firestorePlugin)
Vue.use(firebase)
Vue.use(Clipboard)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
