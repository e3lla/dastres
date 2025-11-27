import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectCategoriesStatus, selectCategoriesError, fetchCategories } from './SecondSliderSlice';

import 'swiper/css';
import 'swiper/css/pagination';

import './SecondSlider.css';
import { Pagination } from 'swiper/modules';

export default function SecondSlider() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const status = useSelector(selectCategoriesStatus);
  const error = useSelector(selectCategoriesError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <>
        <h2 className="text-center flex justify-center text-2xl font-bold mt-7">دسته‌بندی‌های منتخب</h2>
        <div className="text-center py-8">در حال بارگذاری دسته‌بندی‌ها...</div>
      </>
    );
  }

  if (status === 'failed') {
    return (
      <>
        <h2 className="text-center flex justify-center text-2xl font-bold mt-7">دسته‌بندی‌های منتخب</h2>
        <div className="text-center py-8 text-red-500">خطا: {error}</div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center flex justify-center text-2xl font-bold mt-9">دسته‌بندی‌های منتخب</h2>

      <Swiper
        slidesPerView={3}
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
        className="mySwiper special-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <img src={category.image} alt={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}