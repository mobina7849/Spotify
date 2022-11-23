import { Grid } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../Component/Home/Card/CardHome'
import Cards from '../Component/Home/Cards/Cards'
import { cardRecently } from '../Data/cardRecently.data';
import { Hits } from '../Data/cardHits.data'
import Cardcat from '../Component/Home/Category/Card/Cardcat'
import CatCards from '../Component/Home/Category/Cards/CatCards'

export default function Home() {
  return (

    <>
    <CatCards/>
    <Cards category={"Recently played"} data={cardRecently}/>
    <Cards category={"Just the Hits"} data={Hits}/>
    </>

  )
}
