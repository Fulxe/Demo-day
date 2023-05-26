import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlg32Rg7NmDBrnVXjtY5c0Mob113g5yp8",
  authDomain: "add-image-423f8.firebaseapp.com",
  projectId: "add-image-423f8",
  storageBucket: "add-image-423f8.appspot.com",
  messagingSenderId: "177685086917",
  appId: "1:177685086917:web:4b473bc9070894bc9de6ac",
  measurementId: "G-FPZ0J160T2",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
