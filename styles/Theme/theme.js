import { createTheme } from '@mui/material/styles';


export const theme=createTheme({
    palette:{
        mode:'dark'
    },
    typography:{
        h1:{
            fontSize:'32px',
            fontWeight:'700',
            lineHeight:'38px'
        },
        h2:{
            fontSize:'24px',
            fontWeight:'700',
            lineHeight:'38px'
        },
        h3:{
            fontSize:'16px',
            fontWeight:'700',
            lineHeight:'20px'
        },
        body1:{
            fontSize:'14px',
            fontWeight:'700',
            lineHeight:'16px'
        }
    }
})