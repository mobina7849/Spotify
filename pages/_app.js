import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import Layout from '../Component/Layout/Layout'
import '../styles/globals.css'
import {theme} from '../styles/Theme/theme'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Layout>
      <Component {...pageProps} />  
    </Layout>
  </ThemeProvider>
)}

export default MyApp
