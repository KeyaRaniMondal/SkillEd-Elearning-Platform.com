// Import Firebase SDKs
import { initializeApp }
  from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider }
  from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Import config (contains apiKey, authDomain, etc.)
import { firebaseConfig } from "./config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  // Facebook Login
  const facebookLogin = document.getElementById("facebookBtn");
  if (facebookLogin) {
    facebookLogin.addEventListener("click", (event) => {
      event.preventDefault();
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log("✅ Facebook Login Success:", user);
          console.log("Facebook Access Token:", accessToken);
        })
        .catch((error) => {
          console.error("❌ Facebook login error:", error.code, error.message);
        });
    });
  }

  // Twitter Login
  const twitterLogin = document.getElementById("twitterBtn");
  if (twitterLogin) {
    twitterLogin.addEventListener("click", (event) => {
      event.preventDefault();
      signInWithPopup(auth, twitterProvider)
        .then((result) => {
          const user = result.user;
          const credential = TwitterAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          const secret = credential.secret;
          console.log("✅ Twitter Login Success:", user);
          console.log("Twitter Access Token:", accessToken);
          console.log("Twitter Secret:", secret);
        })
        .catch((error) => {
          console.error("❌ Twitter login error:", error.code, error.message);
        });
    });
  }
});
