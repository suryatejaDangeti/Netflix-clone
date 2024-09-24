import { Anchor, Box, Button, Footer, Form, Heading, Image, Text } from "grommet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../../store";
import { customerReturning } from "../../store/user/user.reducer";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FooterComponent from "../Footer/Footer";
import InputField from "../InputField/InputField";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const defaultFormFields = {
        email: '',
        password: ''
    }
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const formOnchange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});

    }

    const formOnsubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            const customerData = response._tokenResponse;
            console.log(response._tokenResponse)
            const customer = {
                id: customerData.localId,
                name: customerData.displayName,
                email: customerData.email,
                returning: customerData.registered
            }
            store.dispatch(customerReturning(customer))
            if(customer.id && customer.returning) {
                navigate('/home');
            }
            

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

    return (
        <Box
            background="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg');
        }"
            height="xlarge"
            width='100%'
            direction="column"
            style={{justifyContent: 'space-between'}}
        >
            <Box>
            <Anchor 
            style={{width:"167px", height:'45px', fill: '#e50914', margin: '2%'}}
            >
                <svg viewBox="0 0 111 30" data-uia="netflix-logo" class="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
            </Anchor>
            </Box>
            <Box
                direction="column"
                align="center"
                justify="center"
                width='100%'
                style={{filter: 'none'}}
            >
                <Box
                    background={{ light: "black" }}
                    width= '30%'
                    style={{paddingBottom: '20px'}}
                >
                    <form
                        autocomplete="off"
                        value={formFields}
                        style={{width:'80%', margin: '10%'}}
                        onChange={formOnchange}
                        onSubmit={formOnsubmit}
                    >
                        <Heading style={{fontSize:'30px', lineHeight: '0px'}}>Sign In</Heading>
                        <InputField 
                            name="email"
                            label='Email'
                            value = {email}
                            placeholder="Enter your email or number"
                        />
                        <InputField 
                            name="password"
                            label='Password'
                            value={password}
                            placeholder="Enter your password"
                        />
                        <Button type="submit" style={{width: '100%', height: '42.9px'}}>Sign In</Button>
                    </form>
                    <Box margin={{horizontal: '10%', vertical: '5px'}} direction='row'>
                        <Text size="medium" color='#737373'>New to Netflix?    .</Text>
                        <Link style={{color: 'rgb(115, 115, 115)', fontSize: '15px'}} to="/signup">Sign up now.</Link>
                    </Box>
                    <Text size="xsmall" color='#737373' margin={{horizontal: '10%'}} >Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</Text>
                </Box>
            </Box>
            <FooterComponent />
        </Box>
    )
}

export default Login;