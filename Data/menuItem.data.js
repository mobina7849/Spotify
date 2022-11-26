import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import StarsIcon from '@mui/icons-material/Stars';
import Image from 'next/image';
import pic1 from '../Assets/Images/Icons/Frame.png'
import pic2 from '../Assets/Images/Icons/Frame (1).png'
import pic3 from '../Assets/Images/Icons/Frame (2).png'
export const ListItemMenu1=[
    {id:1,text:'Home',icon:<HomeIcon/>,href:'/'},
    {id:2,text:'Search',icon:<SearchIcon/>,href:'/Search/search'},
    {id:3,text:'Your Library',icon:<Image src={pic3}/>,href:'/Library/library'},
  ]
 export const ListItemMenu2=[
    {id:1,text:'Create Playlist',icon:<Image src={pic2}/>,href:'/CreatePlaylist'},
    {id:2,text:'Liked Songs',icon:<Image src={pic1}/>,href:'/LikedSongs'},
  ]