import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import './BookCards.css'

const BookCards = ({ books, headline }) => {
    if (books.length === 0) {
        return <div className="text-center text-gray-500">No books available at the moment.</div>;
    }

    return (
        <div className="w-full px-4 lg:px-24">
            <h2 className="text-3xl font-bold text-center text-black my-8">{headline}</h2>
            <div className='w-full h-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="myBookCards w-full h-auto"
                >
                    {
                        books.map((book, index) => (
                            <SwiperSlide key={index} className="w-full h-auto">
                                <Link to={`/books/${book._id}`}>
                                    <div className="w-full h-96 flex items-center justify-center">
                                        <img src={book.imageURL} alt={book.bookTitle} />
                                    </div>
                                    <div>
                                        <h3 className="text-black font-bold text-xl">{book.bookTitle}</h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default BookCards;
