import React from 'react'
import Head from 'next/head'
import { HomeHeader, Navbar, Contact } from '../components/components'
import { client } from '../lib/client'

const Home = ({ countries, genres, years }) => {
  return (
    <>
      <Head>
        <title style={{ color: 'blue', fontFamily: 'Kirt', }}>Website</title>
      </Head>
      <main id='homeBody'>
        <HomeHeader />
        <Navbar />
        <Contact />

      </main>


    </>
  )
}

export const getServerSideProps = async () => {
  const cQuery = `*[_type == "countries"]`;  
  const countries = await client.fetch(cQuery); 

  const gQuery = `*[_type == "genres"]`;  
  const genres = await client.fetch(gQuery); 

  const yQuery = `*[_type == "years"]`;  
  const years = await client.fetch(yQuery); 

  return {
    props: {
      countries,
      genres,
      years
    }
  }
}

// comment //
export default Home
