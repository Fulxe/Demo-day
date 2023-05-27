import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlS7RRM79HdzeFNoV9R9fVpb5pPTHvfBo",
  authDomain: "foodimage-8e104.firebaseapp.com",
  projectId: "foodimage-8e104",
  storageBucket: "foodimage-8e104.appspot.com",
  messagingSenderId: "873834854333",
  appId: "1:873834854333:web:c398c02deb21bc378e04d4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
