import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
export const firbaseauth = getAuth(app);
