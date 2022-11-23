import Cardcat from "../Card/Cardcat";
import {Grid,Typography} from "@mui/material";
import {Category} from "../../../../Data/cardCatgory.data"
const CatCards  = ({data}) => {
    return (  
        <Grid m={4} >
        <Grid>
          <Typography variant={'h1'}>
              {"Good afternoon"}
          </Typography>
        </Grid>
        <Grid
       display={"flex"}
        // container
        //   maxWidth={"1100px"}
          gap={3}
           marginTop={2}
        //   sx={{ overflowX: "auto " }}
        width={'100%'}
        xs={12}
        sx={{flexWrap:'wrap'}}
        >
          {Category.map((item) => (
            <Grid item xs={3} md={2} width={'30%'} >
              <Cardcat dataCat={item}/>
            </Grid>
        
          ))} 
        </Grid>
      </Grid>
    );
}
 
export default CatCards;