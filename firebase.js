const firebaseConfig = {
  apiKey: "AIzaSyCjgtyQ1nW_0RtEsA-EIdFog6F2SZV9MyE",
  authDomain: "to-do-list-2a429.firebaseapp.com",
  projectId: "to-do-list-2a429",
  storageBucket: "to-do-list-2a429.appspot.com",
  messagingSenderId: "715841988042",
  appId: "1:715841988042:web:7ccc2f0f3719697d555b33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();