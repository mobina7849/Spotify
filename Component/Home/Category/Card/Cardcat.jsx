import { Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import p from "../../../../Assets/Images/category/card/Rectangle 5.png"
const Cardcat = ({dataCat}) => {
    return ( 
        <Card sx={{width:'340px',height:'84px'}}>
            <Grid display={'flex'} alignItems={'center'} >
                <Grid>
                    <Image src={dataCat.pic}/>
                </Grid>
                <Grid marginLeft={1}>
                    <Typography variant="body1">
                     {dataCat.haeder}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
     );
}
 
export default Cardcat;