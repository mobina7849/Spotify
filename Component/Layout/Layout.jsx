import { Grid } from "@mui/material";
import Footer from "./Footer";
import MenuList from "./MenuList";

const Layout = ({children}) => {
    return ( 
        <>
        <Grid display={"flex"}>
          <Grid>
             <MenuList item xs={3} />
          </Grid>
          <Grid width={'100%'}>
          {children}

          </Grid>
        </Grid>
        <Footer />
        </>

      

    

     );
}
 
export default Layout;