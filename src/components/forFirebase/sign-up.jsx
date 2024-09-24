import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignUpForm = () => {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already exists');
            } else {
                console.log('user creation encountered error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});

    }

    return (
        <div>
            <h1>sign up with your email and password</h1>
            <form 
            onChange={handleChange}
            onSubmit={handleSubmit}
            >
                <label>Display Name</label>
                <input name="displayName" type="text" required value={displayName} />

                <label>Email</label>
                <input  name="email" type="email" required value={email} />

                <label>Password</label>
                <input  name="password" type="password" required value={password} />

                <label>Confirm Password</label>
                <input  name="confirmPassword" type="password" required value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;