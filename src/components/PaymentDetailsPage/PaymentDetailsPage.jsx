import { Box, Button, Heading, Image, RadioButton, Text } from "grommet";
import { useState } from "react";
import tickmark from '../../asserts/logos/tickmark-logo.svg'
import { store } from "../../store";
import { customerUpdate } from "../../store/user/user.reducer";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import InputField from "../InputField/InputField";
import '../PaymentDetailsPage/paymentDetailsPage.css'



const PaymentDetailsPage = () => {

    const paymentDetails = [
        {
            id: '1',
            type: 'Premium',
            quality: '4K + HDR',
            remainingDetails: [
                {
                    text: 'Monthly price',
                    value: '₹649',
                },
                {
                    text: 'Video and sound quality',
                    value: 'Best',
                },
                {
                    text: 'Resolution',
                    value: '4K (Ultra HD) + HDR',
                },
                {
                    text: 'Spatial audio (immersive sound)',
                    value: 'Included',
                },
                {
                    text: 'Supported devices',
                    value: 'TV, computer, mobile phone, tablet',
                },
                {
                    text: 'Devices your household can watch at the same time',
                    value: 4,
                },
                {
                    text: 'Download devices',
                    value: 6,
                },

            ],
        },
        {
            id: '2',
            type: 'Premium',
            quality: '4K + HDR',
            remainingDetails: [
                {
                    text: 'Monthly price',
                    value: '₹649',
                },
                {
                    text: 'Video and sound quality',
                    value: 'Best',
                },
                {
                    text: 'Resolution',
                    value: '4K (Ultra HD) + HDR',
                },
                {
                    text: 'Spatial audio (immersive sound)',
                    value: 'Included',
                },
                {
                    text: 'Supported devices',
                    value: 'TV, computer, mobile phone, tablet',
                },
                {
                    text: 'Devices your household can watch at the same time',
                    value: 4,
                },
                {
                    text: 'Download devices',
                    value: 6,
                },

            ],
        },
        {
            id: '3',
            type: 'Premium',
            quality: '4K + HDR',
            remainingDetails: [
                {
                    text: 'Monthly price',
                    value: '₹649',
                },
                {
                    text: 'Video and sound quality',
                    value: 'Best',
                },
                {
                    text: 'Resolution',
                    value: '4K (Ultra HD) + HDR',
                },
                {
                    text: 'Spatial audio (immersive sound)',
                    value: 'Included',
                },
                {
                    text: 'Supported devices',
                    value: 'TV, computer, mobile phone, tablet',
                },
                {
                    text: 'Devices your household can watch at the same time',
                    value: 4,
                },
                {
                    text: 'Download devices',
                    value: 6,
                },

            ],
        },
        {
            id: '4',
            type: 'Premium',
            quality: '4K + HDR',
            remainingDetails: [
                {
                    text: 'Monthly price',
                    value: '₹649',
                },
                {
                    text: 'Video and sound quality',
                    value: 'Best',
                },
                {
                    text: 'Resolution',
                    value: '4K (Ultra HD) + HDR',
                },
                {
                    text: 'Spatial audio (immersive sound)',
                    value: 'Included',
                },
                {
                    text: 'Supported devices',
                    value: 'TV, computer, mobile phone, tablet',
                },
                {
                    text: 'Devices your household can watch at the same time',
                    value: 4,
                },
                {
                    text: 'Download devices',
                    value: 6,
                },

            ],
        },
    ]

    const [showUserForm, setShowUserForm] = useState(false);

    const detailsFunction = (eachPaymentDetail) => {
       return eachPaymentDetail.remainingDetails.map((eachDetail) => (
            <Box
            width='100%'
            pad={{top: '10px'}}
        >
            <Text color='rgb(118, 118, 118)' size="small" weight='bold'>{eachDetail.text}</Text>
            <Text color='rgba(0, 0, 0, 0.7)' size="medium" weight='bold'>{eachDetail.value}</Text>
            <hr className="horizontal-line" />
        </Box>

        ))
    }

    const UserDetailsForm = () => {

        const gettingEmail = store.getState().customer.email
    
        const defaultFormFields = {
            email: gettingEmail,
            password: ''
        }
    
        const [formFields, setFormFields] = useState(defaultFormFields)

        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }
    
        const { email, password } = formFields;
    
    
        const formOnchange = (event) => {
            const {name, value} = event.target
            setFormFields({...formFields, [name]: value })
        }

        const formOnsubmit = async (event) => {
            event.preventDefault();
            if(email !== "" && password !== "") {
                try {
                    const { user } = await createAuthUserWithEmailAndPassword(email, password);
                    const userDocRef = await createUserDocumentFromAuth(user, { email });
                    if(user.uid) {
                        console.log(user);
                        const customer = {
                            id: user.uid,
                            name: user.displayName,
                            email: user.email
                        }
                        store.dispatch(customerUpdate(customer))
                        setShowUserForm(true)
                    }
                    resetFormFields();
                } catch(error) {
                    if(error.code === 'auth/email-already-in-use') {
                        alert('cannot create user, email already exists');
                    } else {
                        console.log('user creation encountered error', error);
                    }
                }
            }
        }
    
        return (
            <form
                className="UserForm"
                value={formFields}
                onChange={formOnchange}
                onSubmit={formOnsubmit}
            >
                <Heading style={{width: "65%", fontSize: "30px", lineHeight: "40px"}}>Create a password to start your membership</Heading>
                <Text style={{width: "65%", fontSize: "15px", marginTop: "5px", marginBottom: "5px"}}>Just a few more steps and you're done!<br/>We hate paperwork, too.</Text>
                <InputField
                    name="email"
                    value = {email}
                    placeholder="Email"
                 />
                 <InputField
                    name="password"
                    value = {password}
                    placeholder="Password"
                 />
                 <Button type="submit" style={{width: '64%', height: '50px', fontSize: '25px', fontWeight: 'bold'}}>Next</Button>
            </form>
        )
    
    }
    
    const RadioButtonClicked = (event) => {
        console.log(event.target.value);
    }

    return (
        <Box
        width='100%'
        height='100vh'
        direction="column"
        justify="center"
        align="center"
        >
        { showUserForm ?
            <Box
                align="center"
            >
                <Box
                    width='100%'
                    direction="row"
                    justify="center"
                    align="center"
                >
                    {
                        paymentDetails.map((eachPaymentDetail) => (

                    <Box
                            border='1px'
                            width='17%'
                            margin='1%'
                            pad='small'
                            style={{borderRadius: '10px'}}
                            value={eachPaymentDetail.id}

                    >
                        <RadioButton 
                            value={eachPaymentDetail.id}
                            onClick={RadioButtonClicked}
                            direction="row"
                            justify="center"
                            align="center"
                            style={{width: '10px'}}
                            checked={true} 
                            label={
                                <Box
                                    direction="column"
                                    justify="center"
                                    align="center"
                                >
                                <Box
                            background={'radial-gradient(140.76% 131.96% at 100% 100%, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)'}
                            className='payment-details-conatiner'
                        >
                            <Box>
                                <Text color="#fff" size="large" weight='bold'>{eachPaymentDetail.type}</Text>
                                <Text color="#fff" size="small" weight='bold'>{eachPaymentDetail.quality}</Text>
                            </Box>
                            <Box>
                                <Image alignSelf="end" src={tickmark} />
                            </Box>
                        </Box>
                        {detailsFunction(eachPaymentDetail)}
                        </Box>
                        
                            }
                        />
                    </Box>
                        ))
                    }
                </Box>
                <Box
                width='73%'
                >
                    <Text
                        color='grey'
                        size="small"
                        style={{lineHeight: '20px'}}
                    >
                        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </Text>
                </Box>
                <Box
                    width='100%'
                >
                    <Button alignSelf="center" style={{width: '30%', height: '70px', fontSize: '1.5rem'}} margin={{top: 'medium'}} color="#fff">Next</Button>
                </Box>
            </Box> : 
            <UserDetailsForm />
        }
        </Box>
    )
};

export default PaymentDetailsPage;