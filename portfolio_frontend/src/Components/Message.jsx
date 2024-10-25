import React, {useState} from 'react';
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
import formik from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Message({isOpen, isClose}) {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'From Your profile site',
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
      name: Yup.string().required("Please provide your full name").min(3, "Name must be more than three"),
      email: Yup.string().required("Please provide a valid email").email("Invalid email"),
      phone: Yup.string().required("Please provide you phone number").matches(phoneRegExp, "Invalid phone"),
      message: Yup.string().required("Please add a message").max(150, "Message length too much"),
      subject: Yup.string().required("Please add a message").max(150, "Message length too much")
  })

  const BASE_URL = 'http://127.0.0.1:8000'

  const config = {
    'headers':{
      'content-type': 'application/json',
      'accept': 'application/json',
    }
  }
  

  const formik = useFormik({

    initialValues,
    validationSchema,

    onSubmit : async (values, {resetForm}) => {
      const {name, email, phone, message, subject} = values

      const body = JSON.stringify({name, email, phone, message, subject})

      setLoading(true)
      try{
        await axios.post('https://re-estate-backend.vercel.app/contacts/', body, config)
        .then(res => {
          setSuccess(true)
          setLoading(false)
          setError('')
          resetForm()
        })
        .catch(error => {
        setError(error?.response?.data)
          setLoading(false)
          setSuccess(false)
        })
    }
    catch(error){
      console.log(error)
    }
  }
})

  const {name, email, phone, message} = formik.values

  console.log(error)

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
        <Typography variant='h5' style={{padding: '1rem', textAlign:'center'}}>E-MAIL</Typography>
        {
          loading ? 
          ''
          :
          <>
            {success ? <Typography variant='h5' style={{padding: '1rem', textAlign:'center', color:'#28a528', fontSize:'1.1rem'}}> <p>Message sent! Thank You for Contacting. <br/>  <small style={{color:'orange'}}>Click outside to exit</small></p> </Typography> : ''}
            {error ?<Typography variant='h5' component='h5' style={{padding: '1rem', textAlign:'center', color:"#ff3636"}}> <p>Network Error!</p></Typography> : '' }
          </>
        
        }
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{display: 'flex', flexDirection:'column', gap:'1rem' }}>
            <Grid container spacing={2} sx={{}}>
              <Grid item xs={12} sm={12}>
                <TextField
                    sx={{color: 'white'}}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  color='warning'
                  {...formik.getFieldProps('name')}
                  value={name}
                   helperText={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                  error={formik.errors.name && formik.touched.name ? formik.errors : ''}
                  size='small'
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
                  color='warning'
                  {...formik.getFieldProps('email')}
                  value={email}
                  helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                  error={formik.errors.email && formik.touched.email ? formik.errors : ''}
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Address"
                  name="phone"
                  color='warning'
                  autoComplete="phone"
                  {...formik.getFieldProps('phone')}
                  value={phone}
                  helperText={formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}
                  error={formik.errors.phone && formik.touched.phone ? formik.errors : ''}
                  size='small'
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
                  {...formik.getFieldProps('message')}
                  value={message}
                  color='warning'
                  helperText={formik.errors.message && formik.touched.message ? formik.errors.message : ''}
                  error={formik.errors.message && formik.touched.message ? formik.errors : ''}
                />
              </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Modal>
    
  );
}