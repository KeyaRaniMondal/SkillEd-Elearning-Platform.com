import { initializeApp }
  from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithPopup, FacebookAuthProvider }
  from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);//in config file all firebase configurations like apikey,authdomain ..etc are stored
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const facebookLogin = document.getElementById("facebookBtn"); 
  facebookLogin.addEventListener("click", (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("Logged in user:", user);
        console.log("Access Token:", accessToken);
      })
      .catch((error) => {
        console.error("Error during Facebook login:", error.code, error.message);
      });
  });
});
