import React from 'react'
import SwiperCard from './swiper-card/SwiperCard'

const Banner = () => {
    return (
        <div className='lg:px-24 px-4 bg-teal-100 flex items-center'>
            <div className='flex flex-col w-full md:flex-row justify-between items-center gap-12 py-40'>

                {/* left side div */}
                <div className='space-y-5 md:w-1/2 h-full'>
                    <h2 className='text-6xl text-black font-bold leading-snug'>Why Choose Us?</h2>
                    <h6 className='text-2xl text-blue-700 font-semibold'>Your Book Management Made Simple and Efficient.</h6>
                    <p className='md:w-full'>Welcome to the ultimate solution for book inventory management. Whether you are a bookstore owner, a librarian, or a book enthusiast, our platform simplifies the way you manage your book collection. Say goodbye to cluttered spreadsheets and hello to seamless organization and real-time tracking.</p>
                    <div>
                        <input type="search" name="search" id="search" placeholder='Search for books' className='py-2 px-2 rounded-s-sm outline-none'></input>
                        <button className='bg-blue-700 text-white font-medium hover:bg-black transition-all ease-in duration-200 px-6 py-2 rounded-s-sm'>Search</button>
                    </div>

                </div>

                {/* right side div */}
                <div>
                    <SwiperCard />
                </div>
            </div>
        </div>
    )
}

export default Banner