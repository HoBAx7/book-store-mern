import React from 'react'
import Banner from './Banner'
import Topseller from './Topseller'
import Recommended from './Recommended'
import News from './News'


const Home = () => {
  return (
    <>
        <Banner />
        <Topseller/>
        <Recommended />
        <News />
    </>
  )
}

export default Home
