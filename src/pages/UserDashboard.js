import { Box, Grid, Link } from "@mui/material";
import UserTables from "../components/UserTable";

const UserDashboard = () => {
  
  let state = 'UP'



   return <>
    <Grid container  justifyContent='center' >
    <Grid item sm={10}>
        <h1> Covid Data of {state} state </h1>
        <hr />      

      <Box>
        <Box>
        <Link href="addstatecoviddata" >Add {state} covid data for today</Link>      
        </Box>
        <Box>
        <Link href="addstatecoviddata" >Edit {state} covid data for today</Link>      
        </Box>
        <Box>
        <Link href="addstatecoviddata" >Delete {state} covid data for today</Link>      
        </Box>
      </Box>

      <UserTables/>


      
      </Grid>
    </Grid>
  </>;
};

export default UserDashboard;
