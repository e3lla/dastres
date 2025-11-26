import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ProductCard from "../ProductCard/ProductCard";
import { selectSliderProducts } from "../ProductCard/ProductCardSlice";

const Slider2 = () => {
  const products = useSelector(selectSliderProducts);

  return (
    <div className="w-full mx-auto mt-10  bg-[#E2E2E2] rounded-2xl px-2 md:px-12">
      {/* متن بالای اسلایدر */}
      <div className="flex w-full justify-between items-center px-2 md:px-12 py-6">
        <span className="text-2xl font-bold text-gray-700">
          همین الان موجود شد...
        </span>

        <a
          href="/products?sort=0&available_products=1"
          className="flex text-sm md:text-base items-center gap-2 text-gray-600"
        >
          <span className="hidden md:block">مشاهده همه محصولات</span>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.26 15.53L9.73999 12L13.26 8.46997"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <Swiper
        spaceBetween={50} // فاصله بین کارت‌ها
        slidesPerView={4} // دسکتاپ
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },      // خیلی کوچک: یک کارت کامل + کمی از کارت بعدی
          640: { slidesPerView: 2 },    // موبایل بزرگ‌تر
          768: { slidesPerView: 2 },      // تبلت کوچک
          1024: { slidesPerView: 3 },
          1524: { slidesPerView: 4 },     // دسکتاپ
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <div className="2xl:w-[272px] xl:w-[272px] lg:w-[272px] h-[419px] ">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
