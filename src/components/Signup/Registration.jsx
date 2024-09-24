import { Box, Button, FormField, Heading, Image, Text } from "grommet"
import { useState } from "react"
import checkMark from '../../asserts/logos/checkmark-logo.svg'
import InputField from "../InputField/InputField";
import PaymentDetailsPage from "../PaymentDetailsPage/PaymentDetailsPage";


const Registration = () => {

    const [showData, setShowData] = useState(false);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const DataObject = [
        {
            id: '1',
            imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png',
            heading: 'Finish setting up your account',
            desription: [
                {
                    text: 'Netflix is personalised for you.'
                },
                {
                    text: 'Create a password to watch on any device at any time.'
                }
            ]
        },
        {
            id: '2',
            imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png',
            heading: 'Choose your plan.',
            desription: [
                {
                    desriptionImage: checkMark,
                    text: 'No commitments, cancel anytime.'
                },
                {
                    desriptionImage: checkMark,
                    text: 'Everything on Netflix for one low price.'
                },
                {
                    desriptionImage: checkMark,
                    text: 'No ads and no extra fees. Ever.'
                },
            ]
        },

    ]

    const showDataObject = showData ? DataObject[1] : DataObject[0];


    return (
        <Box>
            {
              !showPaymentDetails ?
        
                <Box
                    width='100%'
                    height='100vh'
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Image
                        width={showData ? '50px' : '20%'}
                        margin={showData ? {bottom: 'small'} : {bottom: 'large'}}
                        src = {showDataObject.imageUrl} />
                    <Box
                        width='50%'
                        direction="column"
                        justify="center"
                        align="center"

                    >
                        <Text
                            size="small"
                            color='#333333'
                        >
                            STEP 1 OF 3
                        </Text>
                        <Heading
                            style={{width: '40%'}}
                            textAlign= "center"
                            size="small"
                            weight='normal'
                            margin={{bottom: 'small', top: '1px'}}
                        >
                            {showDataObject.heading}
                        </Heading>

                        {
                            showDataObject.desription.map((eachData) => (
                                <Box
                                    direction="row"
                                    justify={showData ? "between" : 'center'}
                                    align="center"
                                    width='30%'
                                >
                                    { eachData.desriptionImage &&
                                        <Box
                                            style={{width: '20%'}}
                                            direction="column"
                                            justify="start"
                                            align="start"
                                        >
                                            <Image src={eachData.desriptionImage} color='#e50914' />
                                        </Box>
                                    }
                                    <Text 
                                        size="medium" style={showData ? {width:  '80%'} : {width:  '100%'}} textAlign= {!showData && "center"} color='#333333'
                                    >
                                        {eachData?.text}
                                    </Text>
                                </Box>

                            ))
                        }

                        <Button style={{width: '40%', height: '60px'}} margin={{top: 'small'}}
                            onClick={showData ? () => {
                                setShowPaymentDetails(true);
                            } : () => {
                                setShowData(true)
                            } }
                        >Next</Button>
                    </Box>
                </Box> :
                <PaymentDetailsPage />
}
        </Box>
    )
}

export default Registration;
