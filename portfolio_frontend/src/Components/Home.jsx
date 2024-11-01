import React, { useEffect, useRef } from 'react'
import '../Assets/CSS/Home.scss';
import skills from '../Assets/Statics/skills.js';
import { Box, Grid, Typography } from '@mui/material';
import Web from '../Assets/Statics/Images/web.png';
import Graphics from '../Assets/Statics/Images/graphics.png';
import Data from '../Assets/Statics/Images/Data.png';

const Home = () => {
 
  return (
    <div className='home'>
        <div className='home-section'>
          <h2 className="h2">Brief Bio</h2>
          <Box sx={{ padding:'0.5rem', textAlign:'justify'}}>
            <Typography component='h2' variant='body2' style={{transform: 'scaleY(100%)'}} >
                Am <b style={{color:'rgb(255 113 69)', textTransform:'uppercase', }}>Michael Chinemelu Ugwu,</b> a dedicated Computer Scientist.
                I completed my secondary education at <b style={{color:'rgb(255 113 69)'}}>Nsukka High School</b>  and later
                graduated from the, <b style={{color:'rgb(255 113 69)'}}> University of Nigeria Nsukka, </b> with a degree in Computer Science.
                Am passionate about technology and its applications in solving real-world problems.
            </Typography>
          </Box>
        </div>

        <div className='home-section'>
          <h2 className="h2">Skills</h2>

          <Box sx={{display:'flex'}}>
            {
              skills.map((skill, index) => {
                return(
                  <Grid sx={{padding: '10px',
                    background:'#140014', margin:'0.5rem'}}
                    xs={12} sm={6}
                    className='skills'>
                    <span className='items'><img src={skill.Image} alt='' width='50px'/></span>
                    <span className='items name'>{skill.Name}</span>
                    
                  </Grid> 
                )
             
              })
            }
          </Box>
        </div>

        <div className='service-section'>
            <h2 className="h2" style={{color:'rgb(229 174 255)'}}>Services</h2>
            <Box sx={{display:'flex'}}>
              <div className='boxes'>
                <img src={Web} alt='web design' />
                <span className='txt'>
                  Web Design
                </span>
              </div>

              <div className='boxes'>
                <img src={Graphics} alt='Graphic design' />
               
                <span className='txt'>
                  Graphic Design
                </span>
              </div>

              <div className='boxes'>
                <img src={Data} alt='' />
               
                <span className='txt'>
                  Data Analysis
                </span>
              </div>
          </Box>
        </div>
    </div>
  )
}

export default Home