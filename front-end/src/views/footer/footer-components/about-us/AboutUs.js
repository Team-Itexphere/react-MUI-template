import { Box, Card, Typography } from '@mui/material';
import config from 'config';
import React, { useEffect } from 'react';

import MainCard from 'ui-component/cards/MainCard';
import { capitalizeFirstLetter } from 'utils/common';
import Footer from 'views/footer';




const AboutUs = () => {

    // const user = (JSON.parse(localStorage.getItem('profile')));

    return (
        <>
            <Card sx={{ marginBottom: '10px' }}>
                <Typography variant="h2" ml={4} pt={1} pb={1} >About Us</Typography>
            </Card>

            <Box sx={{ height: "90%",  display: 'flex',  flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between',  }} >
                <Box padding={2} sx={{   bgcolor: '#fafafa'   }}>
                    {/* <Typography variant="h4" gutterBottom component="div">
                    About Us
                </Typography> */}
                    <Typography variant="subtitle1" gutterBottom component="div">
                        About Us
                        Welcome on {config.siteName}.com!
                    </Typography>


                    <Typography variant="body2" gutterBottom >
                        {capitalizeFirstLetter(config.siteName || 'localost3000')} was founded by  Nevin Joshep  in Jan 2022.
                        The domain name  is https://{config.siteName}.com.
                        The tech related articles were written by me with a friend.
                        Our aim is to share our tech knowledge with the world and make {capitalizeFirstLetter(config.siteName || 'localost3000')} as useful as possible.
                    </Typography>
                </Box>
                <Box sx={{ }}>
                <Footer />
                </Box>


            </Box>
        </>
    )
}

export default AboutUs
