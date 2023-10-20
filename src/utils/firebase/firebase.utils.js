import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
  } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9HaEe0Z1sQMrZFwN8mkXssgdd5wZdEBk",
  authDomain: "capstone254-917f3.firebaseapp.com",
  projectId: "capstone254-917f3",
  storageBucket: "capstone254-917f3.appspot.com",
  messagingSenderId: "440383867465",
  appId: "1:440383867465:web:7f01fcf10d95a28e878d98"
};



const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

};

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);


if ((!userSnapshot.exists())) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation
    });

  } catch (error) {
console.log('error creating the user', error.message);
  }
}

return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) 

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) 

  return await signInWithEmailAndPassword(auth, email, password);
}