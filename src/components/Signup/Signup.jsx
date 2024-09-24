import { Anchor, Box, Button, Heading, Image, Text } from "grommet"
import { useState } from "react";
import { store } from "../../store";
import { customerUpdate, updateEmail } from "../../store/user/user.reducer";
import { createAuthUserWithEmailAndPassword, DisplayIdentityProviders } from "../../utils/firebase/firebase";
import InputField from "../InputField/InputField";
import '../Signup/signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate()

    const signUpDummyData = [
        {
            id: 1,
            heading : 'Enjoy on your TV',
            description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
            videoUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v',
            settingOrder: 0
        },
        {
            id: 2,
            heading : 'Download your shows to watch offline',
            description: 'Save your favourites easily and always have something to watch..',
            imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
            videoUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v',
            settingOrder: 3
        },
        {
            id: 3,
            heading : 'Watch everywhere',
            description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
            videoUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v',
            settingOrder: 0
        },
        {
            id: 4,
            heading : 'Create profiles for kids',
            description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            imageUrl: 'https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
            settingOrder: 3
        },
    ]

    const emailOnchange = (event) => {
        console.log(event.target.name)
        setUserEmail(event.target.value);
    }

    const emailChecking = () => {
        if(userEmail !== "") {
            // DisplayIdentityProviders(userEmail);
            store.dispatch(updateEmail(userEmail));
            navigate('/registration');
        }
    }

    return(
        <Box
            className="sign-up-container"
        >
            <Box
                direction="column"
                justify="center"
                align="center"
                width='100%'
                style={{height: '25%'}}
                pad="xlarge"
            >
                <Heading className="heading">Unlimited movies, TV shows and more</Heading>
                <Text size="Xlarge" color='#fff' weight='500'>Watch anywhere. Cancel anytime.</Text>
                <Text size="large" color='#fff' weight='500' style={{lineHeight: '50px'}}>Ready to watch? Enter your email to create or restart your membership.</Text>
                <Box
                    direction="row"
                    justify="between"
                >
                    <InputField
                        onChange={emailOnchange}
                        name="email"
                        placeholder="Email address"
                    />
                    <Button onClick={emailChecking} style={{width: '120px', height: '42px'}} margin={{left: 'medium'}} color="#fff">Get Started</Button>
                </Box>
            </Box>
            {
                signUpDummyData.map((eachData) => (
                    <Box  background="#000" width='100%' >
                        <hr className="horizontal-line" />
                        <Box
                            direction="row"
                            justify="evenly"
                            align="center"
                        >
                            <Box
                                style={{order: eachData.settingOrder}}
                            >
                                <Heading style={{fontFamily: 'helvetica', width:"90%"}} size="small" weight='bold'>{eachData.heading}</Heading>
                                <Text style={{fontFamily: 'helvetica', width:"90%"}} size="large" weight='bold'>{eachData.description}</Text>
                            </Box>
                            <Box
                                style={{position: 'relative'}}
                            >
                                <Image 
                                    style={{ width: '100%', position: 'relative', zIndex: '1'}}
                                    src={eachData.imageUrl}
                                />
                                <Box style={{ width: '100%', position: 'absolute',left: '100px',top: '55px', order: 1}}>
                                <video width="68%" height="350" autoPlay>
                                        <source src={eachData.videoUrl} />
                                    </video>
                                </Box>
                            </Box> 

                </Box>
            </Box>

                ))
            }
        </Box>
    )
}

export default Signup;