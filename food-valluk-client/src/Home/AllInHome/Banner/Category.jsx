import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Category.css';

import { FreeMode, Pagination } from 'swiper/modules';

import i1 from '../../../assets/cimage-1.webp';
import i2 from '../../../assets/cimage-2.webp';
import i3 from '../../../assets/cimage-3.webp';
import i4 from '../../../assets/cimage-4.webp';
import i5 from '../../../assets/cimage-5.webp';
import i6 from '../../../assets/cimage-6.webp';
import i7 from '../../../assets/cimage-7.webp';
import i8 from '../../../assets/cimage-8.webp';
import i9 from '../../../assets/cimage-9.webp';
import i10 from '../../../assets/cimage-10.webp';

const Category = () => {
    return (
        <div className='mt-4 px-5'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1280px
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='text-center'>
                    <img src={i10} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Burgers</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i9} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i8} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Fishes</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i7} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i6} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Chickens</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i5} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Meats</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i4} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Rices</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i3} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Drinks</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i2} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Cakes</h1>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src={i1} alt="" />
                    <h1 className='absolute items-center bottom-6 left-6 text-[20px] font-bold text-white'>Bakeries</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;