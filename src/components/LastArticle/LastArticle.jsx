import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './LastArticle.css';
import Image8 from "../../Images/what-is-mfi-apple-dastresi-Artboard 1 copy 3.jpg"
import Image9 from "../../Images/wireless-charging-vs-charger-dastresiArtboard 1.jpg"


import { Pagination, Autoplay } from 'swiper/modules';

export default function LastArticle() {
  const card = (
    <div className="item flex flex-col w-[296px] justify-between rounded-xl shadow-md bg-white mb-2 hover-title" href="/article/mfi-apple">
      <div className="flex flex-col">
        <img
          className="mx-auto w-auto rounded-xl mb-2"
          alt="چیست؟"
          src={Image8}
        />
        <div className="flex flex-col justify-around flex-1 en_num text-center">
          <h3 className="leading-7 text-xs md:text-sm overflow-hidden en_num h-14 px-4 flex items-center justify-center">
            <span>کابل MFi چیست؟ : ناجی باتری آیفون شما یا یک حقه تبلیغات...</span>
          </h3>
        </div>
      </div>
    </div>
  );
  const card1 = (
    <div className="item flex flex-col w-[296px] justify-between rounded-xl shadow-md bg-white mb-2 hover-title" href="/article/mfi-apple">
      <div className="flex flex-col">
        <img
          className="mx-auto w-auto rounded-xl mb-2"
          alt="چیست؟"
          src={Image9}
        />
        <div className="flex flex-col justify-around flex-1 en_num text-center">
          <h3 className="leading-7 text-xs md:text-sm overflow-hidden en_num h-14 px-4 flex items-center justify-center">
            <span>کابل MFi چیست؟ : ناجی باتری آیفون شما یا یک حقه تبلیغات...</span>
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="text-center flex justify-center text-2xl font-bold mt-7">دسته‌بندی‌های منتخب</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          540: { slidesPerView: 2, },
          768: { slidesPerView: 3,  },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper last-swiper"
      >
        {/* 7 slides */}
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card1}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card1}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card1}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
      </Swiper>
    </>
  );
}
