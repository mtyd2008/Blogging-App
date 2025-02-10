import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth , db } from "./config.js"
import { collection, getDocs, query, where} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";



const logout = document.querySelector("#Logout-btn")
const loginUser = document.querySelector('#login-user')
const userName = document.querySelector('#user-profile-name')
const userProfileImage = document.querySelector('#user-profile-img')

onAuthStateChanged(auth,  async(user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      let users = await getDataFromFirestore()
      console.log(users);
      
      loginUser.classList.remove('d-none')

      userName.innerHTML = user.fullName

      userProfileImage.src = user.profileImage
      
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

async function getDataFromFirestore() {
  let user = ''
  const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
      user = doc.data()
  });

  return user
}

