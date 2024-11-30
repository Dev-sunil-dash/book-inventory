import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './testimonial-card/TestimonialCard';
import testimonials from '../../data/tesimonials.json';
// import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials-section bg-gray-300 py-10 px-4 lg:px-24 ">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination]}
                className="testimonials-swiper"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialCard
                            name={testimonial.name}
                            designation={testimonial.designation}
                            image={testimonial.image}
                            quote={testimonial.quote}
                            rating = {testimonial.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
