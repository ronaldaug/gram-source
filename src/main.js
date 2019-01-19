import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './gramateria'
import './helper-functions'

// firebase
import './firebase'
import {auth} from './firebase'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, {locale: locale});

Vue.config.productionTip = false
let app;
auth.onAuthStateChanged(function() {
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})
