import { Grid } from "@mui/material";
import Footer from "./Footer";
import MenuList from "./MenuList";

const Layout = ({children}) => {
    return ( 
        <>
        <Grid container>
         <MenuList item xs={3}/>
          {children}
        </Grid>
        <Footer />
        </>

      

    

     );
}
 
export default Layout;