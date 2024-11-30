import React from 'react'
import favBookImg from '../../assets/favouritebook.jpg'
import { Link } from 'react-router-dom'

const FavouriteBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={favBookImg} alt='' className='md:w-10/12 rounded' />
            </div>
            <div className='md:w-1/2 space-y-6 mb-12'>
                <h3 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-700'>Book!</span></h3>
                <p className='mb-10 text-base md:w-5/6'>Discover an incredible selection of books that cater to all your interests and passions. Whether you&apos;re into thrilling adventures, heartfelt romances, insightful non-fiction, or captivating fantasies, we have something for everyone. Explore, get inspired, and immerse yourself in the world of words.
                </p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className='text-base'>Registered User</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1000+</h3>
                        <p className='text-base'>PDF Download</p>
                    </div>
                </div>
                <Link to="/shop" className='block mt-8'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    )
}

export default FavouriteBook