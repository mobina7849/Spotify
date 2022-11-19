import { Grid, Paper } from "@mui/material";
const Footer = () => {
    return ( 
        <Paper sx={{width:'100%',position:'sticky',zIndex:1000,height:50,bottom:0}} >
            <Grid display={'flex'}>
                <Grid></Grid>
                <Grid></Grid>
                <Grid></Grid>
            </Grid>
        </Paper>
     );
}
 
export default Footer;