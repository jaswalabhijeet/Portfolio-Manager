import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase'
import db from './datastore'
import portfolio from './portfolioDb'

import App from './App'
import router from './router'
import store from './store'
import config from './components/firebaseConfig'


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
	Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


var app;

firebase.initializeApp(config);

Vue.prototype.$db = db;
Vue.prototype.$pfdb = portfolio;

firebase.auth().onAuthStateChanged(function(user) {
	if (!app) {
		/* eslint-disable no-new */
		new Vue({
			components: { App },
			router,
			store,
			template: '<App/>'
		}).$mount('#app')
	}
})



