import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

import { getAuth, signInWithPopup, GoogleAuthProvider }from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.acessToken;

      const user = result.user;
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;

      const credential= GoogleAuthProvider.credentialFromError(error);
  });
  import { getAuth, signInWithRedirect } from "firebase/auth";
  const auth = getAuth();
  signInWithRedirect(auth, provider);
  
  import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
  const auth = getAuth();
  getRedirectResult(auth)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.acessToken;

      const user = result.user;
    }).catch((error) => {
        const errorCode = error.message;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialsFromError(error);
    });