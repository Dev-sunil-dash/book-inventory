import React from 'react'
import { Link } from 'react-router-dom'
import awardBook from '../../assets/awardbooks.png'

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards for Fiction Shortlist</h2>
                    <Link to="/shop" className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promocode</button></Link>
                </div>
                <div className='md:w-1/2'>
                    <img src={awardBook} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner