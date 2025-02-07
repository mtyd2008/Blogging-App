import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {auth, db} from "./config.js"
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


const form = document.querySelector("#form")
const resEmail = document.querySelector("#Register-email")
const resPass = document.querySelector("#Register-pass")
const name = document.querySelector("#Fullname")


let UserProfilePicUrl = ""

let myWidget = cloudinary.createUploadWidget({
    cloudName: 'dckohrwed',
    uploadPreset: 'my_upload'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        UserProfilePicUrl = result.info.secure_url
        
    }
}
)

document.getElementById("upload-widget").addEventListener("click", (event) => {
    myWidget.open();
    event.preventDefault()
}, false);




form.addEventListener("submit" , (event)=>{
    event.preventDefault();
    console.log(resEmail.value);
    console.log(resPass.value);
    console.log(name.value);
    

    createUserWithEmailAndPassword(auth, resEmail.value, resPass.value, name.value)
  .then(async (userCredential) => {
    const user = userCredential.user;
    console.log(user);

    try {
        const docRef = await addDoc(collection(db, "users"), {
            fullName: name.value,
            email: resEmail.value,
            password: resPass.value,
            profileImage: UserProfilePicUrl,
            uid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
})