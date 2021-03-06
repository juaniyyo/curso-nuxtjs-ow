import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "foodadvisor-945e2",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID,
    appId: process.env.APP_ID
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }
