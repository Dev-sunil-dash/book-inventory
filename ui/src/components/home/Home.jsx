import React from 'react'
import BestSellingBooks from './BestSellingBooks'
import Banner from './Banner'
import FavouriteBook from './FavouriteBook'

const Home = () => {
  return (
    <>
      <Banner />
      <BestSellingBooks />
      <FavouriteBook />
    </>
  )
}

export default Home