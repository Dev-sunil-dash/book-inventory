import React from 'react'
import BestSellingBooks from './BestSellingBooks'
import Banner from './Banner'
import FavouriteBook from './FavouriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Testimonials from './Testimonial'

const Home = () => {
  return (
    <>
      <Banner />
      <BestSellingBooks />
      <FavouriteBook />
      <PromoBanner />
      <OtherBooks />
      <Testimonials />
    </>
  )
}

export default Home