import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import play from "../../Assets/Images/picplay.png"
import pic1 from "../../Assets/Images/Group 6.png"
import pic2 from "../../Assets/Images/Group 7.png"
import pic3 from "../../Assets/Images/Rectangle 14.png"
import pic4 from "../../Assets/Images/Vector.png"
import pic5 from "../../Assets/Images/Vector (2).png"
import pic6 from "../../Assets/Images/Vector(1).png"
import pic7 from "../../Assets/Images/play.png"
import pic8 from "../../Assets/Images/Vector(2).png"
import pic9 from "../../Assets/Images/Vector(3).png"
import pic10 from "../../Assets/Images/Rectangle.png"
import pic11 from "../../Assets/Images/Icons/Group 3.png"
import pic12 from "../../Assets/Images/Icons/Union.png"


const Footer = () => {
    return ( 
        <Paper sx={{width:'100%',position:'sticky',zIndex:1000,height:'60px',bottom:0}} >
            <Grid display={'flex'} p={1} justifyContent={"space-between"}>
                <Grid display={'flex'} alignItems={'center'} >
                    <Grid>
                        <Image src={play} style={{width:'45px',height:'45px'}}/>
                    </Grid>
                    <Grid p={1}>
                        <Typography variant="h3" fontWeight={'400'}>Hold On</Typography>
                        <Typography variant="body2" fontWeight={'400'}>Justin Bieber</Typography>

                    </Grid>
                    <Grid display={"flex"}>
                       <Grid px={1}><Image src={pic12}/></Grid>
                        <Grid><Image src={pic11}/></Grid>
                    </Grid>
                </Grid>
                <Grid width={'20%'} >
                    <Grid display={"flex"} alignItems={'center'} justifyContent={'space-evenly'}>
                        <Grid><Image src={pic5}/></Grid>
                        <Grid><Image src={pic6}/></Grid>
                        <Grid><Image src={pic7}/></Grid>
                        <Grid><Image src={pic8}/></Grid>
                        <Grid><Image src={pic9}/></Grid>
                    </Grid>
                    <Grid display={"flex"} alignItems={'center'}  justifyContent={'center'}>
                        <Typography>0:00</Typography>
                       <Grid sx={{paddingLeft:1,paddingRight:1,display:'flex',alignItems:'center'}}> <Image src={pic10} width={400} /></Grid>
                        <Typography>2:50</Typography>
                    </Grid>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} width={'20%'}>
                    <Grid><Image src={pic1}/></Grid>
                    <Grid><Image src={pic2}/></Grid>
                    <Grid><Image src={pic4}/></Grid>
                    <Grid paddingBottom={1}><Image src={pic3}/></Grid>
                     
                </Grid>
            </Grid>
        </Paper>
     );
}
 
export default Footer;