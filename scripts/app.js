import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./config.js"


const logout = document.querySelector("#Logout-btn")

onAuthStateChanged(auth,  (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html"
    }
  });


logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        console.log('logout sucessfully');
        window.location = 'login.html'

      }).catch((error) => {
        console.log(error);
        
      });
})

