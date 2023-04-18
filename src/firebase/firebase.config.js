// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgkZas5ZmKJpg8MBrxu4D2c_XkLGsxc08",
  authDomain: "dragon-news-paper.firebaseapp.com",
  projectId: "dragon-news-paper",
  storageBucket: "dragon-news-paper.appspot.com",
  messagingSenderId: "680889764140",
  appId: "1:680889764140:web:0a0b12d3ddc31b1461c489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app