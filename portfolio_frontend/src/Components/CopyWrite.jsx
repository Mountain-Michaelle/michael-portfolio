  import React from 'react';
  import { Typography } from '@mui/material';
  import { Link } from 'react-router-dom';

  const Copyright = (props) =>  {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}
        sx={{position:'absolute', color: 'white', bottom: '0', left: '0', background: 'black', fontSize:'0.8rem', padding:'2px'}}>

          {'Copyright © '}

          <Link color="inherit" href="https://mui.com/" style={{color: 'orange', fontSize:'0.8rem'}}>
            https://michael-portfolio-flax.vercel.app/
          </Link>{' '}
          {/* {new Date().getFullYear()}
           */}2023
          {'.'}
        </Typography>
      );
    }

    export default Copyright;