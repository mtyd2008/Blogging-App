import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./config.js"

const form = document.querySelector("#form")
const logEmail = document.querySelector("#log-email")
const logPass = document.querySelector("#log-pass")

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    console.log(logEmail.value);
    console.log(logPass.value);
    

    signInWithEmailAndPassword(auth, logEmail.value, logPass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = "index.html"
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
})