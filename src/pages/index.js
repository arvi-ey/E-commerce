import React, { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Head from 'next/head'
// import ShopPage from './ShopPage'
// import { Shop } from '@mui/icons-material'


const index = () => {

  return (
    <>
      <Head>
        <title>My shop.com</title>
      </Head>
      <Home />
    </>
  )
}

export default index