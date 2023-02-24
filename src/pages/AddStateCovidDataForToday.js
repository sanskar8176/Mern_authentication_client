import { Grid, TextField, Button, Box, Alert } from '@mui/material';


const AddStateCovidData = () => {
    let state = 'UP'


return <>
<h1>{state}</h1>
<Grid container sx={10} justifyContent='center' alignContent='center'> 
<Box component='form'  sx={{ mt: 1 }} id='user-state-data-add' >
  <TextField margin='normal' required fullWidth id='totalcases' name='totalcases' label='Total Cases' />
  <TextField margin='normal' required fullWidth id='recovered' name='recovered' label='Recovered' />
  <TextField margin='normal' required fullWidth id='activecases' name='activecases' label='Active Cases' />
  <TextField margin='normal' required fullWidth id='death' name='death' label='Death' />
  <TextField margin='normal' required fullWidth id='vaccinated' name='vaccinated' label='Vaccinated' />
  {/* <TextField margin='normal' required fullWidth id='createdon' name='createdon' label='Created On' /> */}
 
  <Box textAlign='center'>

        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Add</Button>
  </Box>



  {/* {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''} */}
</Box>
</Grid>
</>;
};

export default AddStateCovidData;