import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import * as firebase from "firebase";
import router from "./routes/index";

firebase.initializeApp({
  apiKey: "AIzaSyDbAxM3H7s0n2GSIRAD1nu2y4Fr1SUeZ5E",
  authDomain: "test-bf43c.firebaseapp.com",
  databaseURL: "https://test-bf43c.firebaseio.com",
  projectId: "test-bf43c",
  storageBucket: "test-bf43c.appspot.com",
  messagingSenderId: "481535080076",
  appId: "1:481535080076:web:8d6cfae0905b75dcac6da9"
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})