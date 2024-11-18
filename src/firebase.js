import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOuHS2OwHXwY0e_dTvmh1P516iTZN1UdM",
    authDomain: "disney-clone-9a20f.firebaseapp.com",
    projectId: "disney-clone-9a20f",
    storageBucket: "disney-clone-9a20f.firebasestorage.app",
    messagingSenderId: "54345630303",
    appId: "1:54345630303:web:a855bc61f3eac219a111ea",
    measurementId: "G-4NYQ0PJPMC"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

  export {auth, provider, storage};
  export default db;