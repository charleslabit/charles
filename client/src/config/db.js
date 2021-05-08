import firebase from 'firebase'
// const firebaseConfig = {
//     apiKey: "AIzaSyBX2wv81FquoVcczQVplYHU1nLqRPTpEPo",
//     authDomain: "myfirstvuefire.firebaseapp.com",
//     databaseURL: "https://myfirstvuefire.firebaseio.com",
//     projectId: "myfirstvuefire",
//     storageBucket: "myfirstvuefire.appspot.com",
//     messagingSenderId: "1080335116911",
//     appId: "1:1080335116911:web:f4ca0bbb34d286c0f6bb9a",
//     measurementId: "G-T74WJ7D2Z2"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyApHy8c7efqP8s7G14ZF5QQFoxYwmT_jLI",
  authDomain: "portfolio-d7e21.firebaseapp.com",
  projectId: "portfolio-d7e21",
  storageBucket: "portfolio-d7e21.appspot.com",
  messagingSenderId: "680062903707",
  appId: "1:680062903707:web:2a9357814c843a07a22d3e",
  measurementId: "G-YXW2RE1NHP"
};
let app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()




// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }





// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();