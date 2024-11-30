import React from 'react';
// import './Testimonial.css';

// import profile from '../../../assets/profile.jpg'

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = ({ name, designation, image, quote, rating }) => {
    return (
        <div className="testimonial-card shadow-xl shadow-black m-8 p-6 bg-white rounded-lg min-h-80 flex flex-col justify-between hover:cursor-pointer">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="flex justify-center items-center mb-2">
                {/* <FaStar className='fill-yellow-400 text-lg'/>
                {rating} */}
                {Array.from({ length: 5 }).map((_, index) => (
                    index < Math.floor(rating) ? (
                        <FaStar key={index} className="text-yellow-500 text-xl" />
                    ) : index < rating ? (
                        <FaStarHalfAlt key={index} className="text-yellow-500 text-xl"/>
                    ) : (
                        <FaRegStar key={index} className="text-gray-300 text-xl" />
                    )
                ))}
            </div>
            <p className="text-gray-700 italic flex-grow">&quot;{quote}&quot;</p>
            <div className='my-auto'>
                <h3 className="text-xl font-semibold text-center text-gray-900">{name}</h3>
                <p className="text-gray-500 text-center">{designation}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
