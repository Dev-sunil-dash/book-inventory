import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperCard.css';

// Import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

// Import images dynamically
import book1 from '../../../assets/banner-books/book1.png';
import book2 from '../../../assets/banner-books/book2.png';
import book3 from '../../../assets/banner-books/book3.png';
import book4 from '../../../assets/banner-books/book4.png';
import book5 from '../../../assets/banner-books/book5.png';

// Array of images
const bookImages = [book1, book2, book3, book4, book5];

export default function SwiperCard() {
    return (
        <>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiperCard"
            >
                {bookImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Book ${index + 1}`} className="slide-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
