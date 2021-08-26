import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCvSl1wXOykr7NByO1mS7IbuYQeTavXRFk",
    authDomain: "group9-60210.firebaseapp.com",
    projectId: "group9-60210",
    storageBucket: "group9-60210.appspot.com",
    messagingSenderId: "681292212582",
    appId: "1:681292212582:web:1b7fda6ec15b5d032b40a7"
}).auth()
