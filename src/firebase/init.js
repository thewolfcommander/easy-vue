import firebase from 'firebase'
// import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-KKKqNXe6Mj3wlewKxiAvpUCtvrRC3oY",
    authDomain: "easyeats-co-in.firebaseapp.com",
    databaseURL: "https://easyeats-co-in.firebaseio.com",
    projectId: "easyeats-co-in",
    storageBucket: "easyeats-co-in.appspot.com",
    messagingSenderId: "732042584479",
    appId: "1:732042584479:web:6412d2759be1f4dc315daa",
    measurementId: "G-KNPLGGSEBN"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// const messaging = firebase.usePublicVapidKey("BCHbPZQtRHWPYkPXE5tNMe1imbgsgpJJkWgtEBgq6hncDrP9kbgRMULA1NoW_1MRuwU7yvFcGEJhzq2CXxnkUts");


// Request permission for messaging
// messaging.requestPermission().then(() => {
//     console.log('Notification permission granted.');

//     // Get Token
//     messaging.getToken().then(token => {
//         console.log(token)
//     })
// }).catch((err) => {
//     console.log('Unable to get permission to notify.', err);
// });


firebaseApp.firestore().settings({
    timestampsInSnapshots: true
})

export default firebaseApp.firestore()