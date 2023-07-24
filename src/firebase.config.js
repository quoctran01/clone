import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8t_UwYZizPP_Ok-KlbmhonK5X0lXruTM",
  authDomain: "quoctran-ecommerce.firebaseapp.com",
  projectId: "quoctran-ecommerce",
  storageBucket: "quoctran-ecommerce.appspot.com",
  messagingSenderId: "87012504228",
  appId: "1:87012504228:web:7fd632dc09062fb5cb6c31",
  measurementId: "G-PMRM4MKL9P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
