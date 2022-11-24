import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import picture from "../../../Assets/Images/imgBanner.png"
import player from "../../../Assets/Images/Icons/thumb_play.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Banner = () => {
    return ( 
        <>
         <Grid sx={{backgroundColor:"#79938D"}} height={280} display={"flex"} alignItems={'flex-end'}>
            <Grid display={'flex'}>
                <Grid>
                    <Image src={picture} width={200} height={200}/>
                </Grid>
                <Grid display={'flex'} flexDirection={'column'} justifyContent={"space-around"}>
                    <Grid><Typography variant="h3">PLAYLIST</Typography></Grid>
                    <Grid><Typography fontSize={50}>Pop Right Now</Typography></Grid>
                    <Grid>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus</Typography>
                       <Typography>Spotify.860,305 likes.100 songs, 5 hr 5 min</Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        <Grid bgcolor={"#222928"}>
            <Grid display={"flex"} alignItems={'center'} gap={2} marginLeft={2} p={1}>
                <Grid><Image src={player} width={40} height={40}/></Grid>
                <Grid><FavoriteBorderIcon/></Grid>
                <Grid><MoreHorizIcon/></Grid>
            </Grid>
        </Grid>
        </>

     );
}
 
export default Banner;