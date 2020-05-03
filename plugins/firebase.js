import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCTeXHi-TdAxvv_2LtKD21K0B-AMUg7ZAs',
    authDomain: 'foodadvisor-945e2.firebaseapp.com',
    databaseURL: 'https://foodadvisor-945e2.firebaseio.com',
    projectId: 'foodadvisor-945e2',
    storageBucket: 'foodadvisor-945e2.appspot.com',
    messagingSenderId: '292925378877',
    appId: '1:292925378877:web:099d5335cff80ae80f7554'
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }
