
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDxJsGzpSGg2FU9WBB1CTRsIld6aOWVta0",
  authDomain: "fakeshop-99c4b.firebaseapp.com",
  projectId: "fakeshop-99c4b",
  storageBucket: "fakeshop-99c4b.appspot.com",
  messagingSenderId: "748959517200",
  appId: "1:748959517200:web:e3b04dd54c997337489895",
  measurementId: "G-C8V2LMW89T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();