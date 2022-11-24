// import { Grid, Paper, Typography,Card } from "@mui/material";
import Image from "next/image";
import pic1 from "../../../Assets/Images/Recentlyplay/card/Rectangle.png"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

const CardHome = ({cardData}) => {

  return (
    <Card sx={{ maxWidth: "190px" ,height:'270px',borderRadius:'4px',padding:2,display:'flex',flexDirection:'column',justifyContent:'space-between',cursor:'pointer'}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="100"
        image={pic1}
      /> */}
      <Grid display={'flex'} alignItems={"center"} justifyContent={"center"}>
       <Image src={cardData.pic} width={"158px"} height={"158px"}/>

      </Grid>

      <Grid  >
        <Typography  variant="h3" component="div">
         {cardData.haeder}
        </Typography>
        <Typography variant="body1" color="text.secondary">
         {cardData.content}
        </Typography>
      </Grid>
    </Card>
  );
}
 
export default CardHome;