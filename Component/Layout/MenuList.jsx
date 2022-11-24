import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Logo from "../../Assets/Images/logoSpotify.png"
import  Link  from 'next/link';
import {ListItemMenu1,ListItemMenu2} from "../../Data/menuItem.data"


const Demo = styled('div')(({ theme }) => ({
    //backgroundColor: theme.palette.background.paper,
    //backgroundColor:'#fff',
  }));

const MenuList = () => {
    return ( 
        <Grid container  sx={{backgroundColor:'#0000'}}  width={'20%'} minWidth={200} height={'100%'} position={'sticky'}>
          <Grid item xs={12}  sx={{backgroundColor:'#000'}}>
            <Grid sx={{ mt: 4, mb: 2,paddingLeft:2}} >
            <Image src={Logo} />
            </Grid>
            <Demo>
              <List marginButtom={2} >
                {ListItemMenu1.map(item=>
                <Link href={item.href} key={item.id}>
                  <ListItem sx={{'&:hover': {"backgroundColor":'action.selected'}}}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                   </ListItem>
                </Link>
                )}
              </List >
            
              <List marginButtom={3} >
                {ListItemMenu2.map(item=>
                 <Link href={item.href} key={item.id}>
                  <ListItem sx={{'&:hover': {"backgroundColor":'action.selected',"borderRadius":'2px'}}}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                    />
                  </ListItem>
                 </Link>
                )}
              </List >
            </Demo>
          </Grid>
        </Grid>

     );
}
 
export default MenuList;






