import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0AiHGZLoh5uBPSVLgnyVoNeKmRvRv_7g",
  authDomain: "plearndashboard.firebaseapp.com",
  projectId: "plearndashboard",
  storageBucket: "plearndashboard.appspot.com",
  messagingSenderId: "682473492675",
  appId: "1:682473492675:web:9cd2297b3d80099c155276",
};
const app = initializeApp(firebaseConfig);
export const firbaseauth = getAuth(app);
