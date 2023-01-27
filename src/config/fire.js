/* eslint-disable */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  query,
  getFirestore,
  getDocs,
  collection,
  where,
  addDoc,
  Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUh2VKSZZ0f-WJqUjZ93YNgrj2FkJXBf0",
  authDomain: "login-register-react-8e0d7.firebaseapp.com",
  projectId: "login-register-react-8e0d7",
  storageBucket: "login-register-react-8e0d7.appspot.com",
  messagingSenderId: "296073211612",
  appId: "1:296073211612:web:29d2d49628f330bde94e19",
  measurementId: "G-LLC85W42JP",
};

export const registerWithEmailAndPassword = async (data) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await updateProfile(user, {
      displayName: data.fName,
      FirstName: data.fName,
      lastName: data.lName,
      country: data.country,
      gender: data.gender,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
