import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsFillLightningFill, BsCart3 } from "react-icons/bs";

const SingleBook = () => {

  const { _id, bookTitle, imageURL, bookDescription, authorName, } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col md:flex-row gap-8'>
      <div className='w-4/5'>
        <img src={imageURL} className='rounded' alt={bookTitle}></img>
      </div>
      <div>
        <h2 className='font-bold text-blue-950 text-3xl'>{bookTitle}</h2>
        <h3 className='mt-5 text-lg font-semibold text-gray-800'>Author: <span className='text-gray-600'>{authorName}</span></h3>
        <p className='mt-5 text-lg font-semibold text-gray-800'>Book Description:</p>
        <p className='text-gray-700'>{bookDescription}</p>
        <h3 className='mt-5 text-lg font-semibold text-gray-800'>Price: <span className='text-green-600'>$100</span></h3>
        <div className='mt-10 flex items-center gap-5'>
          <button className='mt-5 px-8 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition flex items-center gap-2'><BsFillLightningFill />Buy Now</button>
          <button className='mt-5 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition flex items-center gap-2'><BsCart3 /> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default SingleBook