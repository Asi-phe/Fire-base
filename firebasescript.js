var firebaseConfig = {
  apiKey: "AIzaSyDIKZ-i2YBcZdmzBWe_E7ctBeXMPO3lcPY",
  authDomain: "new-project-f6113.firebaseapp.com",
  databaseURL: "https://new-project-f6113-default-rtdb.firebaseio.com",
  projectId: "new-project-f6113",
  storageBucket: "new-project-f6113.appspot.com",
  messagingSenderId: "877384787373",
  appId: "1:877384787373:web:9cabb5bd8a45b73ac4ed24",
  measurementId: "G-977Q7M7FXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
document.getElementById('myForm').addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
auth.createUserWithEmailAndPassword(email, password);
alert("Account Created Successfully");
 
})


