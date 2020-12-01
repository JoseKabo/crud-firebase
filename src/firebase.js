import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBtc6ZucLp_iZp--JwFWWfxmdvQG75TEcM",
    authDomain: "crud-firebase-web-71269.firebaseapp.com",
    databaseURL: "https://crud-firebase-web-71269.firebaseio.com",
    projectId: "crud-firebase-web-71269",
    storageBucket: "crud-firebase-web-71269.appspot.com",
    messagingSenderId: "673337043920",
    appId: "1:673337043920:web:1bde88110d152c2da1e7d5"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();