import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getRemoteConfig } from "firebase/remote-config";;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGIGhwinTQEPSgvtoE4OLJAHjACNhB_ig",
    authDomain: "try-db-ccc11.firebaseapp.com",
    projectId: "try-db-ccc11",
    storageBucket: "try-db-ccc11.appspot.com",
    messagingSenderId: "344443002371",
    appId: "1:344443002371:web:689ffe9196916b882b7836"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Remote config
// let remoteConfig = getRemoteConfig();
// remoteConfig
// .fetchAndActivate()
// .then(activated => {
//   if (!activated) console.log('not activated');
//   return remoteConfig.getAll();
// })
// console.log(remoteConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// const char* DisplayIdentityProviders(firebase::auth::Auth& auth,
//     const char* email) {
// // Get results of most recent call to FetchProvidersForEmail().
// firebase::Future future =
// auth.FetchProvidersForEmailLastResult();
// const firebase::auth::Auth::FetchProvidersResult* result =
// future.result();


export const DisplayIdentityProviders = async (email) => {
    const myAuth = auth.app;
    const future = await fetchSignInMethodsForEmail(auth, email)
    console.log(future)
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email) {
        console.log('called');
    } 
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}