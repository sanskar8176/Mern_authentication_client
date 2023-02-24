import { Grid } from "@mui/material";
import PublicTables from "../components/PublicTable";

const Dashboard = () => {
  
   return <>
    <Grid container  justifyContent='center' >
    <Grid item sm={10}>
        <h1> Covid Data of All States </h1>
        <hr />
        <p>public view of state wise covid details</p>
      


      <PublicTables/>



      
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;
