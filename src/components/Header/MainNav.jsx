import React, { useState } from "react";
import Image1 from "../../../public/Images/logo.png";

const MainNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className="navbar z-50 fixed top-0 left-0 right-0 bg-base-100 shadow-sm md:flex lg:hidden"
      dir="rtl"
    >
      <div className="navbar-start flex items-center gap-2">
        {/* دکمه */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setDrawerOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        {/* لوگو نوار بالا */}
        <img src={Image1} alt="Logo" className="md:w-[95px] sm:-[70px] h-[30px]" />
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* content */}
          <div className="relative bg-white w-64 p-4 min-h-full shadow-lg flex flex-col">
            <button
              className="absolute top-2 right-2 btn btn-ghost"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>

            {/* لوگوی دسترسی */}
            <div className="flex items-center justify-center mb-4 mt-6">
              <img src={Image1} alt="Logo" className="w-[140px] h-[60px]" />
            </div>

            {/* منوی بالای منو اصلی */}
         <ul className="flex flex-wrap items-center  justify-between  border-b border-t pt-4  pb-4 mb-4 mt-4 text-sm font-medium text-right gap-2">
  <li>
    <a className=" hover:text-indigo-600">خانه</a>
  </li>
  <li>
    <a className=" hover:text-indigo-600">دسته‌بندی‌ها</a>
  </li>
  <li>
    <a className=" hover:text-indigo-600">جستجو</a>
  </li>
  <li>
    <a className=" hover:text-indigo-600">سبد خرید</a>
  </li>
</ul>


            {/* منوی دسته‌بندی‌ها از تصویر */}
           <div className="flex-1 text-right overflow-y-auto max-h-[300px] pr-1">
  <ul className="menu space-y-2">
    <li><a>لوازم جانبی موبایل و کامپیوتر</a></li>
    <li><a>کابل - مبدل - رابط</a></li>
    <li><a>لوازم تولید محتوا</a></li>
    <li><a>لوازم شبکه</a></li>
    <li><a>کنسول بازی و لوازم جانبی</a></li>
    <li><a>لوازم شخصی و پوشیدنی</a></li>
    <li><a>لوازم شخصی و پوشیدنی</a></li>
    <li><a>لوازم شخصی و پوشیدنی</a></li>
    <li><a>لوازم شخصی و پوشیدنی</a></li>
  </ul>
</div>


            {/* دکمه پایین */}
            <div className="mt-10">
              <button className="btn btn-primary rounded-xl w-full">
                ورود / ثبت‌نام
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-end w-[600px] ">

    <div className=" flex xl:mr-44">
        <div tabIndex={0} role="button" className="btn btn-min2  ml-0.5">
     <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
            </div>
 <div className=" flex xl:mr-44">
        <div tabIndex={0} role="button" className="btn btn-min2  ml-0.5">
                     <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="4.288">

<path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>

</g>

<g id="SVGRepo_iconCarrier">

<path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>

</g>

</svg>
              </div>
            </div>
            {/*بمون*/}
             <div className="indicator flex xl:mr-44">
        <div tabIndex={0} role="button" className="btn btn-mine relative ml-2.5">
                <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#FE5F55">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#FE5F55" strokeWidth="4.8">
                    <polyline fill="#FE5F55" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" points="7.21 15.82 22.48 12.96 22.48 4.36 4.15 4.36"/>
                    <path fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" d="M.52,1.5H3.39L7.2,15.82,5.54,18.31a1.48,1.48,0,0,0-.24.82h0a1.46,1.46,0,0,0,1.46,1.46h11.9"/>
                    <circle fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" cx="18.66" cy="21.55" r="0.95"/>
                    <circle fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" cx="9.11" cy="21.55" r="0.95"/>
                  </g>
                </svg>
                <span className="badge badge-sm w-2.5 indicator-item badge-orange rounded-[15px]">0</span>
              </div>
            </div>
       </div>
    </div>
  );
};

export default MainNav;
