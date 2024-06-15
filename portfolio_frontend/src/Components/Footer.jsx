import React, { useState } from 'react'
import '../Assets/CSS/Footer.scss';
import lets from '../Assets/Statics/Images/lets.png';
import { Box, Button, Modal, Typography } from '@mui/material';
import SocialContact from './SocialContact';
import Message from './Message';
import Copyright from './CopyWrite';
const Footer = () => {

  const [isOpen, setIsOpen] = useState(false)


  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className='footer' style={{position: 'relative'}}>
        <div className='left'>
          <Box sx={{width: '100%', }}>
          <Typography variant='h5'>Contact me let's talk!</Typography>
            <Button onClick={handleIsOpen} variant='outlined' color='warning' sx={{margin:"10px"}}>Message Me</Button>
            <Message isOpen={isOpen} isClose={handleClose} />
          </Box>

          <Box sx={{width:'100%', display: 'flex', flexDirection:'column', gap:'1rem'}}>
            <Typography variant='h6'>Social Handles</Typography>
              <div style={{display: 'flex', flexFlow: 'wrap row', justifyContent: 'center'}} className='align-social'>
                <SocialContact  />
              </div>
          </Box>
         
        </div>

        <div className='right' style={{height: '100%'}}>
          <Box sx={{width:'100%', display:'flex', flexFlow: 'wrap column',
          position: 'absolute', top: '0', right:'2', width:'600px', zIndex:'100', marginTop:'-3rem',
          margin: '1rem' }} >
          </Box>
          <Box sx={{width:'100%'}}>
             <img src={lets} alt='' />
          </Box>
         
        </div>
        <Copyright />
    </div>
  )
}

export default Footer