import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Modal } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Message({isOpen, isClose}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Modal
    open={isOpen}
    onClose={isClose}
    style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop:'-3rem'}}
    >
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: 'white',
            margin: '0 auto',
            padding: '2rem'
          }}
        >
        <Typography variant='h5' style={{padding: '1rem', textAlign:'center'}}>Contact Me</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{display: 'flex', flexDirection:'column', gap:'1rem' }}>
            
            <Grid container spacing={2} sx={{}}>
              <Grid item xs={12} sm={12}>
                <TextField
                    sx={{color: 'white'}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                color='warning'
                />
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Address"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  name="message"
                  label="Text message"
                  maxRows={4}
                  type="text"
                  id="message"
                  autoComplete="new-password"
                />
              </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Modal>
    
  );
}