import { Box, Grid, Link } from "@mui/material";
import AdminTables from "../components/AdminTable";

const AdminDashboard = () => {
  



   return <>
    <Grid container  justifyContent='center' >
    <Grid item sm={10}>
        <h1> Approve Covid Data of states for today </h1>
        <hr />      


      <AdminTables/>


      
      </Grid>
    </Grid>
  </>;
};

export default AdminDashboard;
