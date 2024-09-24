// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase"

import SignUpForm from "./sign-up";


const SignIn = () => {

    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(user);
    //         }
    //     })()
    // }, [])

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(response);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button> */}
        </div>
    )
}

export default SignIn