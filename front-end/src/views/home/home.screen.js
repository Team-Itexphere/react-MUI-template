// material-ui
import { Box, Typography, Card } from '@mui/material';
import { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import GenericInput from 'ui-component/components/input/genericInput';
import Footer from 'views/footer';

const Home = () => {
const [name, setName] = useState('')

const handleChange = (e) => {
    setName(e.target.value)
}
    return (
        <>
            <MainCard sx={{
                height: '90%'
            }}>
                <Box>
                    <GenericInput 
                    values={name}
                    handleChange={handleChange}
                    label="Email Address / Username"
                    type="email"
                    name="email"
                    error={false}
                    errorMsg="error ..."
                    style={{width: '50%'}}
                    />
                    {/* <Typography > body</Typography>
                    <Typography > body</Typography> */}
                </Box>



            </MainCard>

            <Card
                sx={{
                    marginTop: 1,
                    height: '10%'
                }}
            >
                <Footer />
            </Card>
        </>

    )


};

export default Home;
