import { Grid, TextField, Button, Box, Alert } from '@mui/material';


const Login = () => {



return <>
<h1>User/Admin Login</h1>
<Grid container sx={10} justifyContent='center' alignContent='center'> 
<Box component='form'  sx={{ mt: 1 }} id='login-form' >
  <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
  <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
  <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
  </Box>
  {/* {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''} */}
</Box>
</Grid>
</>;
};

export default Login;