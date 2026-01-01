  import React from 'react';
  import { Typography } from '@mui/material';

  const Copyright = (props) =>  {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}
        sx={{position:'absolute', bottom: '0', left: '0', background: 'black',
         fontSize:'0.8rem', padding:'2px', color: 'orange', fontSize:'0.8rem'}}>
          {'Copyright © '} {new Date().getFullYear()} Michael Chinemelu. All rights reserved.
        </Typography>
      );
    }

    export default Copyright;