import { useTheme } from '@emotion/react';
import { Card, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import config from 'config';
import React from 'react'

import { capitalizeFirstLetter } from 'utils/common';

import './footer.css'; 

const Footer = () => {

    const theme = useTheme();
    
  return (
    <Card sx={{
        height: '100%', width: '100%',
        border: '1px solid',
        borderColor: theme.palette.primary.light,
        ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },
        display: 'flex',
    }} 
    className="footer"
    >
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', padding: '15px', }}>
            <Typography sx={{}}>
                © {new Date().getFullYear()} {capitalizeFirstLetter(`${config.siteName}.com`)} 
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', }} className="footer-pages">
            <Link  underline="none"  href="/about-us" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }}  className="footer-typography" >
                About Us
            </Link >

            <Link  underline="none"  href="/contact-us" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                Contact Us
            </Link>

            <Link  underline="none"  href="/disclaimer" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                Disclaimer
            </Link>

            <Link  underline="none"  href="/privacy-policy" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                Privacy Policy
            </Link>

            <Link  underline="none"  href="/DMCA" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                DMCA
            </Link>
            <Link  underline="none"  href="/suggetion-bugs" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                Suggestions
            </Link>
        </Box>

    </Card>
  )
}

export default Footer