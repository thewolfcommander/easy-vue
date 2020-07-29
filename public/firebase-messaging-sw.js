importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyB-KKKqNXe6Mj3wlewKxiAvpUCtvrRC3oY",
    authDomain: "easyeats-co-in.firebaseapp.com",
    databaseURL: "https://easyeats-co-in.firebaseio.com",
    projectId: "easyeats-co-in",
    storageBucket: "easyeats-co-in.appspot.com",
    messagingSenderId: "732042584479",
    appId: "1:732042584479:web:6412d2759be1f4dc315daa",
    measurementId: "G-KNPLGGSEBN"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();