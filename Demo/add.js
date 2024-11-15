// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  onValue,
  set,
  serverTimestamp,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5XgrxbhewODZTcIRYGFzhRj2WBAwLY-A",
    authDomain: "humber-demo-a268f.firebaseapp.com",
    projectId: "humber-demo-a268f",
    storageBucket: "humber-demo-a268f.firebasestorage.app",
    messagingSenderId: "1056574859232",
    appId: "1:1056574859232:web:b83123f72bdbaa5eaaed85"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});