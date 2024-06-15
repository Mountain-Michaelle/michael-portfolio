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
    full_name: '',
    email: '',
    phone: '',
    message: '',
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
      full_name: Yup.string().required("Please provide your full name").min(3, "Name must be more than three"),
      email: Yup.string().required("Please provide a valid email").email("Invalid email"),
      phone: Yup.string().required("Please provide you phone number").matches(phoneRegExp, "Invalid phone"),
      message: Yup.string().required("Please add a message").max(150, "Message length too much")
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
      const {full_name, email, phone, message} = values

      const body = JSON.stringify({full_name, email, phone, message})

      setLoading(true)
      try{
        await axios.post(`${BASE_URL}`, body, config)
        .then(res => {
          setSuccess(true)
          setLoading(false)
          resetForm()
        })
        .catch(error => {
        setError(error?.response?.data)
          setLoading(false)
        })
    }
    catch(error){
      console.log(error)
    }
  }
})

  const {full_name, email, phone, message} = formik.values

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
        <Typography variant='h5' style={{padding: '1rem', textAlign:'center'}}> Contact Me </Typography>
        <Typography variant='h5' style={{padding: '1rem', textAlign:'center'}}>{error ? <p>Network error..., check your connection</p> : ''}</Typography>

          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{display: 'flex', flexDirection:'column', gap:'1rem' }}>
            <Grid container spacing={2} sx={{}}>
              <Grid item xs={12} sm={12}>
                <TextField
                    sx={{color: 'white'}}
                  autoComplete="given-name"
                  name="full_name"
                  required
                  fullWidth
                  id="full_name"
                  label="Full Name"
                  autoFocus
                  color='warning'
                  {...formik.getFieldProps('full_name')}
                  value={full_name}
                   helperText={formik.errors.full_name && formik.touched.full_name ? formik.errors.full_name : ''}
                  error={formik.errors.full_name && formik.touched.full_name ? formik.errors : ''}
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