import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, 'users', userAuth.uid);

console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot.exists());

if ((!userSnapshot.exists())) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });

  } catch (error) {
console.log('error creating the user', error.message);
  }
}

return userDocRef;
};