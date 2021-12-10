// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWrHUU5IaQ-FoQCcwzYQHdyRXakHn9PQU",
  authDomain: "marite-tshani.firebaseapp.com",
  databaseURL: "https://marite-tshani-default-rtdb.firebaseio.com",
  projectId: "marite-tshani",
  storageBucket: "marite-tshani.appspot.com",
  messagingSenderId: "288986402380",
  appId: "1:288986402380:web:db4b0edc2717a6856feee9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", writeUserData);
function writeUserData(firstName, lastName, email, phone, message) {
    const db = getDatabase();
    firstName = document.getElementById("first-name");
    lastName = document.getElementById("second-name");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    message = document.getElementById("message");

    if (firstName.value == "" || lastName.value == "" || email.value == "" || phone.value == "" || message.value == "") {
      swal("Empty Container", "Please fill every container");
      return 0;
    }

    set(ref(db, 'users/' + (firstName.value + lastName.value)), {
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: email.value,
        PhoneNumber: phone.value,
        Message: message.value
    })
    .then(()=>{
        swal("Data Stored", "Can't wait to talk, Thank you!", "success");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
    })
    .catch(()=>{
      swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    });
}