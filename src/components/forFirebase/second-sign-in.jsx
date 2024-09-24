import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

const SecondSignInForm = () => {

    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            

            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password' :
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found' :
                    alert("user doesn't exists");
                    break;
                default:
                    console.log(error);
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});

    }

    return (
        <div>
            <h1>Already have an account</h1>
            <form 
            onChange={handleChange}
            onSubmit={handleSubmit}
            >
                <label>Email</label>
                <input  name="email" type="email" required value={email} />

                <label>Password</label>
                <input  name="password" type="password" required value={password} />

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SecondSignInForm;